'use client'
import s from './Navbar.module.css'
// import Web3 from 'web3'
// import Web3Modal from 'web3modal'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import request from '@/lib/request'
import { ReduxState, login } from '@/lib/redux'

const providerOptions = {
  /* See Provider Options Section */
}

export default function Account() {
  const dispatch = useDispatch()
  const userInfo = useSelector((state: ReduxState) => state.dashboard.userInfo)
  const [web3Modal, setWeb3Modal] = useState<any>()
  const connectWallet = async () => {
    try {
      //     const web3Modal = new Web3Modal({
      //       network: 'mainnet', // optional
      //       cacheProvider: true, // optional
      //       providerOptions // required
      //     })
      //     setWeb3Modal(web3Modal)
      //     const provider = await web3Modal.connect()
      //     await web3Modal.toggleModal()
      //     const web3 = new Web3(provider)
      //     const accounts = await web3.eth.getAccounts()
      //     console.log(accounts)
      //     // const signature = await web3.eth.sign('personal sign', accounts[0])
      //     const signature: any = await window.ethereum.request({
      //       method: 'personal_sign',
      //       params: ['join zpkass', accounts[0]]
      //     })

      //     const response = await request.post('/v1/api/node/auth/signinByAccount', {
      //       address: accounts[0],
      //       signature: signature,
      //       login_type: 'wallet'
      //     })
      const response = await request.post('/v1/api/node/auth/signinByAccount', {
        address: '0x19bc7C4CC0E240DAd6C6B21518C05C09e8B2A4a8',
        signature:
          '0x690861122b613c6064f2f159b2b50351e0ba7dcc8acdd59938c54b116803751524fe0005dcaff01f6d551440e30bee38e08f8e03c7e79773f9c6e3a929f279fe1c',
        login_type: 'web'
      })
      const userInfo = response.data.info
      await dispatch(login(userInfo))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      {!userInfo && (
        <button className={s.launch} onClick={() => connectWallet()}>
          launch app
        </button>
      )}
      {userInfo && <div>userInfo.address</div>}
    </>
  )
}
