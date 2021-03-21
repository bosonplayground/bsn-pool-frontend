import {
  BOSON_ROUTER_CONTRACT_RINKEBY_ADDRESS,
  BOSON_VOUCHER_KERNEL_CONTRACT_RINKEBY_ADDRESS
} from 'lib/constants'
import BosonRouterAbi from 'abis/BosonRouterAbi'
import BosonVoucherKernelAbi from 'abis/BosonVoucherKernelAbi'
import { ethers } from 'ethers'

export const mintAndCommit = async (signer, address) => {
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

  const nbOffers = await voucherKernel.typeId()
  if (nbOffers.eq(0)) {
    await bosonRouter.createOrder()
    const nbOffers2 = await voucherKernel.typeId()
    console.log('nbOffers', nbOffers2.toString())
  }

  let tokenSupplyId

  const requestVoucher = async (tokenIdSupply) => {
    const product_price = '30000000000000000' // 0.03
    const buyer_deposit = '4000000000000000' // 0.004
    const txValue = ethers.BigNumber.from(product_price).add(buyer_deposit)
    const response = await bosonRouter.requestVoucherETHETH(tokenIdSupply, address, {
      value: txValue
    })
    console.log('Tx sent', response.hash)
    const receipt = await response.wait()
    console.log('Tx validated', receipt.transactionHash)
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
    await requestVoucher(tokenSupplyId)
  }
}

export const useMintAndCommit = () => {
  const handleMintAndCommit = async (signer, address) => {
    const txHash = await mintAndCommit(signer, address)
    console.log(txHash)
    return txHash
  }

  return { onMintAndCommit: handleMintAndCommit }
}
