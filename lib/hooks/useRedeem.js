import { BOSON_ROUTER_CONTRACT_RINKEBY_ADDRESS } from 'lib/constants'
import BosonRouterAbi from 'abis/BosonRouterAbi'
import { ethers } from 'ethers'

export const redeem = async (signer, id) => {
  const bosonRouter = new ethers.Contract(
    BOSON_ROUTER_CONTRACT_RINKEBY_ADDRESS,
    BosonRouterAbi,
    signer
  )
  return await bosonRouter.redeem(id, {
    gasLimit: 250000
  })
}

export const useRedeem = () => {
  const handleRedeem = async (signer, id) => {
    const txHash = await redeem(signer, id)
    console.log(txHash)
    return txHash
  }

  return { onRedeem: handleRedeem }
}
