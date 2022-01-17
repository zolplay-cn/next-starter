import type { NextPage } from 'next'

import Seo from '~/components/Seo'

const Home: NextPage = () => {
  return (
    <div className="container / mx-auto min-h-screen">
      <Seo />

      <main className="flex justify-center items-center min-h-screen">
        <h1 className="font-3xl / font-bold">Welcome to Zolplay App</h1>
      </main>
    </div>
  )
}

export default Home
