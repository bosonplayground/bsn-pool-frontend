import { batch, contract } from '@pooltogether/etherplex'
import { QUERY_KEYS, BOSON_COMMITMENT_TOKEN_RINKEBY_ADDRESS } from 'lib/constants'
import { useAllCreatedPrizePoolsWithTokens } from 'lib/hooks/useAllCreatedPrizePoolsWithTokens'
import { useReadProvider } from 'lib/hooks/useReadProvider'
import { useQuery } from 'react-query'
import ERC1155ERC721Abi from 'abis/ERC1155ERC721Abi'
import { WalletContext } from 'lib/components/WalletContextProvider'
import { useContext } from 'react'

export const useBosonTokenBalances = () => {
  const { data: prizePools, isFetched: prizePoolsIsFetched } = useAllCreatedPrizePoolsWithTokens()
  const { readProvider: provider, isLoaded: readProviderIsLoaded } = useReadProvider()
  const walletContext = useContext(WalletContext)
  const usersAddress = walletContext._onboard.getState().address

  return useQuery(
    [QUERY_KEYS.useBosonTokenBalances, prizePools, usersAddress],
    async () => getAllBosonTokenBalances(provider, prizePools, usersAddress),
    {
      enabled: readProviderIsLoaded && prizePoolsIsFetched,
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity
    }
  )
}

const getAllBosonTokenBalances = async (provider, prizePools, usersAddress) => {
  const bosonTokenBalances = {}
  try {
    const batchRequests = []
    for (const prizePool of prizePools) {
      const bosonContract = contract(
        BOSON_COMMITMENT_TOKEN_RINKEBY_ADDRESS,
        ERC1155ERC721Abi,
        BOSON_COMMITMENT_TOKEN_RINKEBY_ADDRESS
      )

      if (usersAddress) {
        batchRequests.push(
          bosonContract.balanceOf(usersAddress), // ERC721 Commitment Token balance of user
          bosonContract.balanceOf(prizePool.prizePool) // ERC721 Commitment Token balance of pool
        )
      }
    }

    const values = await batch(provider, ...batchRequests)
    if (usersAddress) {
      const userBalanceUnformatted =
        values[BOSON_COMMITMENT_TOKEN_RINKEBY_ADDRESS]['balanceOf(address)'][0]
      bosonTokenBalances[usersAddress] = userBalanceUnformatted
    }
    for (const prizePool of prizePools) {
      const bosonPoolBalanceUnformatted =
        values[BOSON_COMMITMENT_TOKEN_RINKEBY_ADDRESS]['balanceOf(address)'][0]
      bosonTokenBalances[prizePool.prizePool] = bosonPoolBalanceUnformatted
    }
    return bosonTokenBalances
  } catch (e) {
    console.error(e.message)
    return {}
  }
}
