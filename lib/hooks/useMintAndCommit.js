import {
  BOSON_ROUTER_CONTRACT_RINKEBY_ADDRESS,
  BOSON_VOUCHER_KERNEL_CONTRACT_RINKEBY_ADDRESS
} from 'lib/constants'
import BosonRouterAbi from 'abis/BosonRouterAbi'
import BosonVoucherKernelAbi from 'abis/BosonVoucherKernelAbi'
import { ethers } from 'ethers'

export const mintAndCommit = async (signer, address, provider) => {
  const bosonRouter = new ethers.Contract(
    BOSON_ROUTER_CONTRACT_RINKEBY_ADDRESS,
    BosonRouterAbi,
    signer
  )
  const voucherKernel = new ethers.Contract(
    BOSON_VOUCHER_KERNEL_CONTRACT_RINKEBY_ADDRESS,
    BosonVoucherKernelAbi,
    signer
  )

  const createOrder = async () => {
    const latestBlock = await provider.getBlock('latest')
    const from = latestBlock.timestamp
    const to = from + 2 * 24 * 3600 // 2 days
    const product_price = '30000000000000000' // 0.03
    const seller_deposit = '5000000000000000' // 0.005
    const buyer_deposit = '4000000000000000' // 0.004
    const quantity = 10
    const txValue = ethers.BigNumber.from(seller_deposit).mul(quantity)
    const response = await bosonRouter.requestCreateOrderETHETH(
      [from, to, product_price, seller_deposit, buyer_deposit, quantity],
      { value: txValue }
    )
    console.log('Tx sent - create', response.hash)
    const receipt = await response.wait()
    console.log('Tx validated - create', receipt.transactionHash)
    return receipt
  }

  await createOrder()
  const nbOffers = await voucherKernel.typeId()
  console.log('nbOffers', nbOffers.toString())

  let tokenSupplyId

  const requestVoucher = async (tokenIdSupply) => {
    const product_price = '30000000000000000' // 0.03
    const buyer_deposit = '4000000000000000' // 0.004
    const txValue = ethers.BigNumber.from(product_price).add(buyer_deposit)
    const response = await bosonRouter.requestVoucherETHETH(tokenIdSupply, address, {
      value: txValue
    })
    console.log('Tx sent - request voucher', response.hash)
    const receipt = await response.wait()
    console.log('Tx validated - request voucher', receipt.transactionHash)
    return receipt
  }

  const getTokenSupplyIdFromPromise = async (key) => {
    return new Promise((resolve, reject) => {
      voucherKernel
        .promises(key)
        .then((promiseData) => {
          const idx = promiseData[1]
          const idxplus = idx
            .mul(ethers.BigNumber.from(2).pow(128))
            .add(ethers.BigNumber.from(2).pow(255))
          resolve(idxplus)
        })
        .catch(reject)
    })
  }

  for (let i = 0; i < nbOffers.toNumber(); i++) {
    await voucherKernel
      .getPromiseKey(ethers.BigNumber.from(i))
      .catch((e) => {
        console.error(e)
      })
      .then(async (key) => {
        console.log('key #' + i, key)
        tokenSupplyId = await getTokenSupplyIdFromPromise(key)
        console.log('--> id:', tokenSupplyId)
      })
  }

  if (tokenSupplyId) {
    return await requestVoucher(tokenSupplyId)
  }
}

export const useMintAndCommit = () => {
  const handleMintAndCommit = async (signer, address, provider) => {
    const tx = await mintAndCommit(signer, address, provider)
    return tx
  }

  return { onMintAndCommit: handleMintAndCommit }
}
