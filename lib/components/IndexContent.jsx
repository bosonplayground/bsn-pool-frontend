import React, { useContext, useMemo, useState } from 'react'
import Link from 'next/link'
import { find, findKey, upperFirst } from 'lodash'
import FeatherIcon from 'feather-icons-react'
import classnames from 'classnames'

import { NETWORKS, CONTRACT_ADDRESSES, POOL_ALIASES } from 'lib/constants'
import { ButtonLink } from 'lib/components/ButtonLink'
import { Card } from 'lib/components/Card'
import { Collapse } from 'lib/components/Collapse'
import { DropdownInputGroup } from 'lib/components/DropdownInputGroup'
import { TextInputGroup } from 'lib/components/TextInputGroup'
import { WalletContext } from 'lib/components/WalletContextProvider'
import { useCoingeckoTokenData } from 'lib/hooks/useCoingeckoTokenData'
import { getDemoPoolContractAddress } from 'lib/utils/getDemoPoolContractAddress'
import { shorten } from 'lib/utils/shorten'
import { useAllCreatedPrizePoolsWithTokens } from 'lib/hooks/useAllCreatedPrizePoolsWithTokens'
import { useAllUserTokenBalances } from 'lib/hooks/useAllUserTokenBalances'
import { useBosonTokenBalances } from 'lib/hooks/useBosonTokenBalances'
import { getPrecision, numberWithCommas } from 'lib/utils/numberWithCommas'
import { useNetwork } from 'lib/hooks/useNetwork'
import { CheckboxInputGroup } from 'lib/components/CheckboxInputGroup'
import { formatEtherscanAddressUrl } from 'lib/utils/formatEtherscanAddressUrl'
import { Tooltip } from 'lib/components/Tooltip'
import { PoolTogetherLoading } from 'lib/components/PoolTogetherLoading'

import BatSvg from 'assets/images/bat-new-transparent.png'
import DaiSvg from 'assets/images/dai-new-transparent.png'
import UsdcSvg from 'assets/images/usdc-new-transparent.png'
import UsdtSvg from 'assets/images/usdt-new-transparent.png'
import WbtcSvg from 'assets/images/wbtc-new-transparent.png'
import ZrxSvg from 'assets/images/zrx-new-transparent.png'

const demoAssetTypes = {
  dai: { label: 'DAI', logo: DaiSvg },
  uni: { label: 'UNI Stake' },
  usdc: { label: 'USDC', logo: UsdcSvg },
  usdt: { label: 'USDT', logo: UsdtSvg },
  bosonx: { label: 'BosonX', logo: UsdtSvg }
}
const demoPools = {
  rinkeby: { chainId: 4, assets: ['dai', 'usdc', 'usdt', 'bosonx'] }
}

export const IndexContent = (props) => {
  return <PoolsLists />
}

const PoolsLists = () => {
  const {
    data: createdPrizePools,
    isFetched: createdPrizePoolsIsFetched,
    isFetching: createdPrizePoolsIsFetching
  } = useAllCreatedPrizePoolsWithTokens()
  const {
    data: tokenBalances,
    isFetched: tokenBalancesIsFetched,
    isFetching: tokenBalancedIsFetching
  } = useAllUserTokenBalances()
  const {
    data: bosonTokenBalances,
    isFetched: bosonTokenBalancesIsFetched,
    isFetching: bosonTokenBalancedIsFetching
  } = useBosonTokenBalances()

  if (
    !createdPrizePoolsIsFetched ||
    !tokenBalancesIsFetched ||
    !bosonTokenBalancesIsFetched ||
    tokenBalancedIsFetching ||
    createdPrizePoolsIsFetching ||
    bosonTokenBalancedIsFetching
  ) {
    return <PoolTogetherLoading />
  }

  return (
    <>
      <UsersPoolsCard
        createdPrizePools={createdPrizePools}
        tokenBalances={tokenBalances}
        bosonTokenBalances={bosonTokenBalances}
      />
      <ReferencePoolCard />
      <BuilderCard />
    </>
  )
}

const CardTitle = (props) => (
  <div
    className={classnames('font-bold text-base sm:text-2xl text-accent-1 ', {
      'mb-4': !props.noMargin
    })}
  >
    {props.children}
  </div>
)

const ReferencePoolCard = () => {
  const [network, setNetwork] = useState('mainnet')
  const [contractAddress, setContractAddress] = useState('')

  const formatValue = (key) => NETWORKS[key].view

  const onValueSet = (network) => {
    setNetwork(network)
  }

  return (
    <Card>
      <Collapse title='🔍 Lookup pool by contract address'>
        <DropdownInputGroup
          id='network-dropdown'
          label={'Network the Pool is on:'}
          formatValue={formatValue}
          onValueSet={onValueSet}
          current={network}
          values={NETWORKS}
        />

        <TextInputGroup
          id='contractAddress'
          label={<>Prize Pool contract address:</>}
          required
          onChange={(e) => setContractAddress(e.target.value)}
          value={contractAddress}
        />

        <div className='mt-4 ml-auto'>
          <ViewButton
            as={`/pools/${network}/${contractAddress}/home`}
            href='/pools/[networkName]/[prizePoolAddress]/home'
            disabled={!contractAddress}
          />
        </div>
      </Collapse>
    </Card>
  )
}

const BuilderCard = () => {
  return (
    <Card>
      <div className='w-full flex flex-row'>
        <CardTitle noMargin>🔨 Pool Builder</CardTitle>
        <ViewButton text='Start Building' href={'https://builder.pooltogether.com/'} />
      </div>
    </Card>
  )
}

const UsersPoolsCard = (props) => {
  const { createdPrizePools, tokenBalances } = props

  const walletContext = useContext(WalletContext)

  const isWalletConnected = Boolean(walletContext._onboard.getState().address)

  const pools = useMemo(() => {
    if (!createdPrizePools || !tokenBalances || !isWalletConnected) return []

    const pools = []

    for (const prizePool of createdPrizePools) {
      const token = tokenBalances[prizePool.token]
      const ticket = tokenBalances[prizePool.ticket]

      // Add to user pools if user has a balance
      if (Number(ticket.balance) !== 0) {
        const row = (
          <PoolRow key={prizePool.prizePool} prizePool={prizePool} token={token} ticket={ticket} />
        )
        pools.push(row)
      }
    }

    pools.sort(sortByTvl)

    return pools
  }, [createdPrizePools, tokenBalances, isWalletConnected])

  if (pools.length === 0) return null

  return (
    <Card>
      <CardTitle>🎟 My Pools</CardTitle>
      <ListHeaders />
      <ul>{pools}</ul>
    </Card>
  )
}

const sortByTvl = (a, b) => Number(b.props.ticket.totalSupply) - Number(a.props.ticket.totalSupply)

const ListHeaders = (props) => {
  const walletContext = useContext(WalletContext)
  const isWalletConnected = Boolean(walletContext._onboard.getState().address)

  return (
    <div className='w-full flex text-accent-1 text-xs mb-2'>
      <span className='w-2/3 xs:w-1/3 mr-2 sm:mr-0'>Title</span>
      <span className='w-1/6 hidden sm:block'>Type</span>
      {isWalletConnected && <span className='w-1/6 hidden sm:block'>My balance</span>}
      <span className='w-1/6 hidden xs:block'>Total deposits</span>
    </div>
  )
}

const PoolRow = (props) => {
  const walletContext = useContext(WalletContext)
  const isWalletConnected = Boolean(walletContext._onboard.getState().address)

  return (
    <li className='flex flex-row mb-4 last:mb-0 w-full'>
      <PoolTitleCell {...props} />
      <TypeCell {...props} />
      {isWalletConnected && <UsersBalanceCell {...props} />}
      <TvlCell {...props} />
      <Actions {...props} />
    </li>
  )
}

const PoolTitleCell = (props) => {
  const { prizePool, token } = props
  const name = token?.name
  const { token: tokenAddress, prizePoolOwner } = prizePool
  const { data: tokenData } = useCoingeckoTokenData(tokenAddress)
  const imageUrl = tokenData?.image?.large

  return (
    <div className='flex w-2/3 xs:w-1/3 mr-2 sm:mr-0'>
      <div className='w-6 h-6 mr-2'>
        {imageUrl && <img src={imageUrl} className='my-auto rounded-full' />}
      </div>
      <div className='flex flex-col'>
        {name}
        <span className='text-accent-1 text-xxs'>
          Owned by: <OwnerAddress ownerAddress={prizePoolOwner} />
        </span>
      </div>
    </div>
  )
}

const TypeCell = (props) => {
  const { prizePool } = props
  const { type } = prizePool
  return <span className='w-1/6 hidden sm:block my-auto'>{type}</span>
}

const TvlCell = (props) => {
  const { ticket, token } = props
  const amount = ticket.totalSupply.toString()
  return (
    <span className='w-1/6 hidden xs:block my-auto'>
      {numberWithCommas(amount, { precision: getPrecision(Number(amount)) })}
      <span className='ml-1 text-xs text-accent-1'>{token.symbol}</span>
    </span>
  )
}

const UsersBalanceCell = (props) => {
  const { ticket } = props
  const balance = ticket.balance.toString()

  return (
    <span className='w-1/6 hidden sm:block my-auto'>
      {numberWithCommas(balance, { precision: getPrecision(Number(balance)) })}
      <span className='ml-1 text-xs text-accent-1'>{ticket.symbol}</span>
    </span>
  )
}

const OwnerAddress = (props) => {
  const { ownerAddress } = props
  const [chainId] = useNetwork()
  const url = formatEtherscanAddressUrl(ownerAddress, chainId)

  if (ownerAddress === CONTRACT_ADDRESSES[chainId].GovernanceTimelock) {
    return (
      <div className='inline bg-purple-1 rounded-full px-2 width-fit-content'>
        <a
          href={url}
          className={`trans hover:text-inverse`}
          target='_blank'
          rel='noopener noreferrer'
          title='View on Etherscan'
        >
          <span className='inline-block '>PoolTogether</span>
          <FeatherIcon icon='external-link' className='is-etherscan-arrow ml-1 inline-block' />
        </a>
      </div>
    )
  }

  return (
    <a
      href={url}
      className={`trans hover:text-inverse`}
      target='_blank'
      rel='noopener noreferrer'
      title='View on Etherscan'
    >
      <span className='inline-block'>{shorten(ownerAddress)}</span>
      <FeatherIcon icon='external-link' className='is-etherscan-arrow ml-1 inline-block' />
    </a>
  )
}

const Actions = (props) => {
  const [chainId, networkName] = useNetwork()
  const { prizePool, ticket } = props
  const { prizePool: prizePoolAddress } = prizePool

  const [as, href] = useMemo(() => {
    const poolAlias = Object.values(POOL_ALIASES).find(
      (poolAlias) => poolAlias.poolAddress === prizePoolAddress.toLowerCase()
    )
    if (poolAlias) {
      const as = `/${poolAlias.alias}`
      const href = '/[poolAlias]'
      return [as, href]
    }
    const as = `/pools/${networkName}/${prizePoolAddress}/home`
    const href = '/pools/[networkName]/[prizePoolAddress]/home'
    return [as, href]
  }, [prizePoolAddress, networkName])

  return (
    <div className='ml-auto'>
      <ViewButton as={as} href={href} />
    </div>
  )
}

const ViewButton = (props) => (
  <ButtonLink
    size='base'
    color='tertiary'
    as={props.as}
    href={props.href}
    paddingClasses='px-4 xs:px-10 py-1 sm:py-2'
    className='ml-auto'
    disabled={props.disabled}
  >
    {props.text}
  </ButtonLink>
)

ViewButton.defaultProps = {
  text: 'View'
}
