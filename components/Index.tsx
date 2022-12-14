import Link from 'next/link'

import { useAuth } from 'hook/AuthContext'

export const Index = () => {
  const { currentUser } = useAuth()

  return(
    <div className='bg-white dark:bg-gray-800 flex relative z-20 items-center'>
      <div className='container mx-auto px-6 flex flex-col justify-between items-center relative py-8'>
        <div className='flex flex-col'>
          <h1 className='font-light w-full uppercase text-center text-4xl sm:text-5xl dark:text-white text-gray-800'>
            Kickstart Project!
          </h1>
          <h2 className='font-light max-w-2xl mx-auto w-full text-xl dark:text-white text-gray-500 text-center py-8'>
            毎度、同じもの作るの面面倒なので、基本的に必要なるものをいれておきます。
          </h2>
          <div className='flex items-center justify-center mt-4'>
            <Link href={ currentUser ? '/dashboard' : '/get_start' }>
              <a className='uppercase py-2 px-4 bg-gray-800 border-2 border-transparent text-white text-md mr-4 hover:bg-gray-900'>Get started</a>
            </Link>
            <a href='https://github.com/yokohama/next-startup' 
              target='_blank'
              rel='noreferrer'
              className='uppercase py-2 px-4 bg-transparent border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md'
            >Documentation</a>
          </div>
        </div>
      </div>
    </div>
  )
}
