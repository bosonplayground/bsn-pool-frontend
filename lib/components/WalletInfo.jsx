import React, { useState, useContext } from 'react'
import classnames from 'classnames'
import FeatherIcon from 'feather-icons-react'

import { NETWORKS } from 'lib/constants'
import { WalletContext } from 'lib/components/WalletContextProvider'
import { Button } from 'lib/components/Button'
import { networkColorClassname } from 'lib/utils/networkColorClassname'
import { chainIdToName } from 'lib/utils/chainIdToName'
import { shorten } from 'lib/utils/shorten'

import { useRedeem } from '../hooks/useRedeem'
import { useMintAndCommit } from '../hooks/useMintAndCommit'

export const WalletInfo = () => {
  const walletContext = useContext(WalletContext)
  const { _onboard } = walletContext || {}
  const currentState = _onboard.getState()

  const [tx, setTx] = useState({})

  const resetState = (e) => {
    e.preventDefault()
    setTx({})
  }

  let address
  let walletName
  let chainId = 1

  if (currentState) {
    address = currentState.address
    walletName = currentState.wallet.name
    chainId = currentState.appNetworkId
  }

  let innerContent = null
  let networkNameJsx = null

  if (chainId && chainId !== 1) {
    let networkName = chainIdToName(chainId)
    const formattedNetworkName = NETWORKS[networkName]?.view
    if (formattedNetworkName) {
      networkName = NETWORKS[networkName]?.view
    }

    networkNameJsx = (
      <span className={classnames(networkColorClassname(chainId), 'inline-block')}>
        {networkName}
      </span>
    )
  }

  const handleRedeemClick = async (e, id) => {
    e.preventDefault()
    const provider = walletContext.state.provider
    const signer = provider.getSigner()
    const { onRedeem } = useRedeem()

    try {
      const newTx = await onRedeem(
        signer,
        '57896044618658097711785492504343953927655839433583097410118915826251869454337' // TODO: this ID has been redeemed
      )
      setTx((tx) => ({
        ...tx,
        hash: newTx.hash,
        inWallet: false,
        sent: true
      }))

      await newTx.wait()

      setTx((tx) => ({
        ...tx,
        completed: true
      }))
    } catch (e) {
      console.log(e)
      setTx((tx) => ({
        ...tx,
        completed: true,
        error: true
      }))
    }
  }

  const handleMintClick = async (e) => {
    e.preventDefault()
    const provider = walletContext.state.provider
    const signer = provider.getSigner()
    const { onMintAndCommit } = useMintAndCommit()

    try {
      const newTx = await onMintAndCommit(signer, address, provider)
      setTx((tx) => ({
        ...tx,
        hash: newTx.hash,
        inWallet: false,
        sent: true
      }))

      // await newTx.wait()

      setTx((tx) => ({
        ...tx,
        completed: true
      }))
    } catch (e) {
      console.log(e)
      setTx((tx) => ({
        ...tx,
        completed: true,
        error: true
      }))
    }
  }

  if (address && walletName) {
    // TODO: only show Redeem if Wallet contains CommitmentTokens
    innerContent = (
      <>
        <Button onClick={handleMintClick}>Gift a Physical Item</Button>
        <Button onClick={handleRedeemClick}>Redeem Physical Item(s)</Button>
        <div className='leading-snug text-highlight-3 trans'>
          <span className='text-highlight-3 hover:text-highlight-1 overflow-ellipsis block w-full no-underline'>
            {shorten(address)}
          </span>

          <span className='block sm:inline-block rounded-lg text-default'>
            {walletName} {networkNameJsx}
          </span>
        </div>

        <button
          onClick={() => _onboard.walletReset()}
          className={classnames(
            'text-lightPurple-500 hover:text-white trans ml-2 outline-none focus:outline-none',
            'block border rounded-full w-4 h-4 sm:w-5 sm:h-5 text-center text-lg',
            'border-purple-700 hover:bg-lightPurple-700',
            'trans'
          )}
        >
          <FeatherIcon icon='x' className={classnames('w-3 h-3 hover:text-white m-auto')} />
        </button>
      </>
    )
  }

  return (
    <>
      <div className='relative flex justify-end items-center'>{innerContent}</div>
    </>
  )
}
