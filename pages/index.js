import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Main from './Main'
import { useState } from 'react'
import Guide from './Modal/Guide'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [modal,setModal] = useState(false)
  return (
    <>
      <Head>
        <title>CW 술게임</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Guide setModal={setModal}/>
      <Main />
    </>
  )
}
