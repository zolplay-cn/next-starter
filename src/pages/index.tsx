import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="container / mx-auto min-h-screen">
      <Head>
        <title>App</title>
        <meta name="description" content="Zolplay app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center items-center">
        <h1 className="font-3xl / font-bold">Welcome to Zolplay App</h1>
      </main>
    </div>
  )
}

export default Home
