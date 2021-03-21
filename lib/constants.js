import CompoundPrizePoolProxyMainnet from '@pooltogether/pooltogether-contracts/deployments/mainnet/CompoundPrizePoolProxyFactory.json'
import CompoundPrizePoolProxyRinkeby from '@pooltogether/pooltogether-contracts/deployments/rinkeby/CompoundPrizePoolProxyFactory.json'
import CompoundPrizePoolProxyKovan from '@pooltogether/pooltogether-contracts/deployments/kovan/CompoundPrizePoolProxyFactory.json'
import CompoundPrizePoolProxySokol from '@pooltogether/pooltogether-contracts/deployments/poaSokol/CompoundPrizePoolProxyFactory.json'
import CompoundPrizePoolProxyXDai from '@pooltogether/pooltogether-contracts/deployments/xdai/CompoundPrizePoolProxyFactory.json'
import CompoundPrizePoolProxyMatic from '@pooltogether/pooltogether-contracts/deployments/matic/CompoundPrizePoolProxyFactory.json'
import CompoundPrizePoolProxyMumbai from '@pooltogether/pooltogether-contracts/deployments/mumbai/CompoundPrizePoolProxyFactory.json'

import StakePrizePoolProxyMainnet from '@pooltogether/pooltogether-contracts/deployments/mainnet/StakePrizePoolProxyFactory.json'
import StakePrizePoolProxyRinkeby from '@pooltogether/pooltogether-contracts/deployments/rinkeby/StakePrizePoolProxyFactory.json'
import StakePrizePoolProxyKovan from '@pooltogether/pooltogether-contracts/deployments/kovan/StakePrizePoolProxyFactory.json'
import StakePrizePoolProxySokol from '@pooltogether/pooltogether-contracts/deployments/poaSokol/StakePrizePoolProxyFactory.json'
import StakePrizePoolProxyXDai from '@pooltogether/pooltogether-contracts/deployments/xdai/StakePrizePoolProxyFactory.json'
import StakePrizePoolProxyMatic from '@pooltogether/pooltogether-contracts/deployments/matic/StakePrizePoolProxyFactory.json'
import StakePrizePoolProxyMumbai from '@pooltogether/pooltogether-contracts/deployments/mumbai/StakePrizePoolProxyFactory.json'

import RNGBlockhashMainnet from '@pooltogether/pooltogether-rng-contracts/deployments/mainnet/RNGBlockhash.json'
import RNGBlockhashRinkeby from '@pooltogether/pooltogether-rng-contracts/deployments/rinkeby/RNGBlockhash.json'
import RNGBlockhashKovan from '@pooltogether/pooltogether-rng-contracts/deployments/kovan/RNGBlockhash.json'
import RNGBlockhashSokol from '@pooltogether/pooltogether-rng-contracts/deployments/poaSokol_77/RNGBlockhash.json'
import RNGBlockhashXDai from '@pooltogether/pooltogether-rng-contracts/deployments/xdai_100/RNGBlockhash.json'
import RNGBlockhashMatic from '@pooltogether/pooltogether-rng-contracts/deployments/matic_137/RNGBlockhash.json'
import RNGBlockhashMumbai from '@pooltogether/pooltogether-rng-contracts/deployments/mumbai_80001/RNGBlockhash.json'

import RNGChainlinkMainnet from '@pooltogether/pooltogether-rng-contracts/deployments/mainnet/RNGChainlink.json'
import RNGChainlinkRinkeby from '@pooltogether/pooltogether-rng-contracts/deployments/rinkeby/RNGChainlink.json'
import RNGChainlinkKovan from '@pooltogether/pooltogether-rng-contracts/deployments/kovan/RNGChainlink.json'
import RNGChainlinkMumbai from '@pooltogether/pooltogether-rng-contracts/deployments/mumbai_80001/RNGChainlink.json'

import { contractVersions, prizePoolBuilders } from '@pooltogether/current-pool-data'

export const SENTINEL_ADDRESS = '0x0000000000000000000000000000000000000001'

export const SUPPORTED_NETWORKS = [1, 4, 42, 77, 100, 137, 1234, 31337, 80001]

export const SECONDS_PER_BLOCK = 14

export const DEFAULT_TOKEN_PRECISION = 18

export const DAI_MAINNET_ADDRESS = '0x6b175474e89094c44da98b954eedeac495271d0f'

export const BOSON_X_TOKEN_RINKEBY_ADDRESS = '0x200E5295fEC37B4410E6688a94de22C9d4C6DDbb'
export const BOSON_COMMITMENT_TOKEN_RINKEBY_ADDRESS = '0xe8FF7C12477130D63F2D516308F3134eb9489bB9'
export const BOSON_ROUTER_CONTRACT_RINKEBY_ADDRESS = '0xDB3bF0Bee5c0DE37D6C65c61012aAfea2Ce469e1'
export const BOSON_VOUCHER_KERNEL_CONTRACT_RINKEBY_ADDRESS =
  '0xF129ee2eAEe0a60e0695DCB5231A03f6fdaB1Da2'

export const POOL_ALIASES = {
  'dpi': {
    alias: 'dpi',
    networkName: 'mainnet',
    poolAddress: '0x9f7905C7BD5ec9E870eD50F0E286f2742c19F5B3',
    tokenAddress: '0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b'
  },
  'rai': {
    alias: 'rai',
    networkName: 'mainnet',
    poolAddress: '0xF6d6B30D31077dB8590FE1bea7A293e1515f8152',
    tokenAddress: '0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919'
  },
  'basis': {
    alias: 'basis',
    networkName: 'mainnet',
    poolAddress: '0x1Ee6194b0e28C12dF0FD107e5eb883Aa071F8C9a'
  },
  'sushi': {
    alias: 'sushi',
    networkName: 'mainnet',
    poolAddress: '0x258d1ab585593831f2dcc898722fb924fc0e3609'
  },
  'bond': {
    alias: 'bond',
    networkName: 'mainnet',
    poolAddress: '0xea7eaecbff99ce2412e794437325f3bd225ee78f',
    tokenAddress: '0x0391d2021f89dc339f60fff84546ea23e337750f'
  },
  'synthetix': {
    alias: 'synthetix',
    networkName: 'mainnet',
    poolAddress: '0x9BdD57C278794BdceD35f091BB26736a4cF4AAa6'
  },
  'aave': {
    alias: 'aave',
    networkName: 'mainnet',
    poolAddress: '0x22964F820d40F22f59bf4A7F06aa8F27b159E398'
  },
  'rinkeby-test': {
    alias: 'rinkeby-test',
    networkName: 'rinkeby',
    poolAddress: '0x4706856FA8Bb747D50b4EF8547FE51Ab5Edc4Ac2'
  },
  'bosonx': {
    alias: 'bosonx',
    networkName: 'rinkeby',
    poolAddress: '0x92b856e26a7fCb1839887877254e960d6aF0f20A'
  }
}

export const CONTRACT_ADDRESSES = {
  1: {
    COMPOUND_PRIZE_POOL_PROXY: CompoundPrizePoolProxyMainnet.address,
    STAKE_PRIZE_POOL_PROXY: StakePrizePoolProxyMainnet.address,
    RNG_SERVICE: {
      blockhash: RNGBlockhashMainnet.address,
      chainlink: RNGChainlinkMainnet.address
    },
    GovernanceTimelock: '0x42cd8312D2BCe04277dD5161832460e95b24262E',
    Sablier: '0xA4fc358455Febe425536fd1878bE67FfDBDEC59a'
  },
  4: {
    COMPOUND_PRIZE_POOL_PROXY: CompoundPrizePoolProxyRinkeby.address,
    STAKE_PRIZE_POOL_PROXY: StakePrizePoolProxyRinkeby.address,
    RNG_SERVICE: {
      blockhash: RNGBlockhashRinkeby.address,
      chainlink: RNGChainlinkRinkeby.address
    },
    GovernanceTimelock: '0x8Df0AfB54836dc8D0AE795503F837Cff197d3df1',
    Sablier: '0xc04Ad234E01327b24a831e3718DBFcbE245904CC'
  },
  42: {
    COMPOUND_PRIZE_POOL_PROXY: CompoundPrizePoolProxyKovan.address,
    STAKE_PRIZE_POOL_PROXY: StakePrizePoolProxyKovan.address,
    RNG_SERVICE: {
      blockhash: RNGBlockhashKovan.address,
      chainlink: RNGChainlinkKovan.address
    }
  },
  77: {
    COMPOUND_PRIZE_POOL_PROXY: CompoundPrizePoolProxySokol.address,
    STAKE_PRIZE_POOL_PROXY: StakePrizePoolProxySokol.address,
    RNG_SERVICE: {
      blockhash: RNGBlockhashSokol.address
    }
  },
  100: {
    COMPOUND_PRIZE_POOL_PROXY: CompoundPrizePoolProxyXDai.address,
    STAKE_PRIZE_POOL_PROXY: StakePrizePoolProxyXDai.address,
    RNG_SERVICE: {
      blockhash: RNGBlockhashXDai.address
    }
  },
  137: {
    COMPOUND_PRIZE_POOL_PROXY: CompoundPrizePoolProxyMatic.address,
    STAKE_PRIZE_POOL_PROXY: StakePrizePoolProxyMatic.address,
    RNG_SERVICE: {
      blockhash: RNGBlockhashMatic.address
    }
  },
  31337: {
    COMPOUND_PRIZE_POOL_PROXY: CompoundPrizePoolProxyRinkeby.address,
    STAKE_PRIZE_POOL_PROXY: StakePrizePoolProxyRinkeby.address,
    RNG_SERVICE: {
      blockhash: '',
      chainlink: ''
    }
  },
  80001: {
    COMPOUND_PRIZE_POOL_PROXY: CompoundPrizePoolProxyMumbai.address,
    STAKE_PRIZE_POOL_PROXY: StakePrizePoolProxyMumbai.address,
    RNG_SERVICE: {
      blockhash: RNGBlockhashMumbai.address,
      chainlink: RNGChainlinkMumbai.address
    }
  }
}

export const PRIZE_POOL_TYPE = Object.freeze({
  compound: 'compound',
  stake: 'stake',
  yield: 'yield'
})

export const CONTRACTS = Object.freeze({
  compound: 'CompoundPrizePool',
  stake: 'StakePrizePool',
  yield: 'YieldPrizePool',
  singleRandomWinner: 'SingleRandomWinner',
  multipleWinners: 'MultipleWinners'
})

export const MAX_EXIT_FEE_PERCENTAGE = 10

export const DATA_REFRESH_POLLING_INTERVAL = 25000

export const DEFAULT_INPUT_CLASSES =
  'w-full text-inverse bg-transparent trans outline-none leading-none'
export const DEFAULT_INPUT_LABEL_CLASSES = 'mt-0 mb-1 text-xs sm:text-sm'
export const DEFAULT_INPUT_GROUP_CLASSES = 'trans py-2 px-5 sm:py-4 sm:px-10 bg-body'

const domain = process.env.NEXT_JS_DOMAIN_NAME && `.${process.env.NEXT_JS_DOMAIN_NAME}`
export const COOKIE_OPTIONS = {
  sameSite: 'strict',
  secure: process.env.NEXT_JS_DOMAIN_NAME === 'pooltogether.com',
  domain
}

// Cookie strings
export const SELECTED_WALLET_COOKIE_KEY = 'selectedWallet'

// Min decimal for day inputs to allow minutes (0.0001 ≈ 8 seconds)
export const DAYS_STEP = 0.0001

export const CONTRACT_VERSIONS = contractVersions

export const QUERY_KEYS = {
  coingeckoTokenData: 'coingeckoTokenData',
  useAllCreatedPrizePools: 'useAllCreatedPrizePools',
  useAllCreatedPrizePoolsWithTokens: 'useAllCreatedPrizePoolsWithTokens',
  useAllUserTokenBalances: 'useAllUserTokenBalances',
  useBosonTokenBalances: 'useBosonTokenBalances'
}

export const PRIZE_POOL_BUILDERS = prizePoolBuilders

export const NETWORKS = {
  'ropsten': {
    value: 'ropsten',
    view: 'Ropsten'
  },
  'rinkeby': {
    value: 'rinkeby',
    view: 'Rinkeby'
  },
  'mainnet': {
    value: 'mainnet',
    view: 'Mainnet'
  },
  'kovan': {
    value: 'kovan',
    view: 'Kovan'
  },
  'poa-sokol': {
    value: 'poa-sokol',
    view: 'Sokol (POA)'
  },
  'xdai': {
    value: 'xdai',
    view: 'xDai'
  },
  'matic': {
    value: 'matic',
    view: 'Matic'
  },
  'mumbai': {
    value: 'mumbai',
    view: 'Mumbai (Matic)'
  },
  'local': {
    value: 'local',
    view: 'Local'
  }
}
