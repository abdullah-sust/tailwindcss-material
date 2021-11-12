import type { NextPage } from 'next'
import Head from 'next/head'


const Home: NextPage = () => {
  return (
    <div className="px-8 py-0">
      <Head>
        <title>Tailwindcss Material</title>
      </Head>

      <main className="min-h-screen	px-16 py-0 flex flex-1 flex-col justify-center items-center">
        <h1 className="">
          Welcome to <a href="https://nextjs.org">tailwindcss-material</a>
        </h1>

        <p  className="">
          Get started by editing{' '}
          <code className="">pages/index.tsx</code>
        </p>
      </main>

      <footer className="py-8 px-0 border-t-2 border-solid border-gray-300 flex flex-1 justify-center ">
        <a
          href="https://github.com/abdullah-sust/tailwindcss-material"
          target="_blank"
          rel="noopener noreferrer"
        >
      Copyright ©2021
           </a>
      </footer>
    </div>
  )
}

export default Home
