import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'


function MyApp({ Component, pageProps ,router }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 my-16 md:mb-16 lg:mb-0 sm:px-32 lg:px-3 xl:px-14 ">
        <div className="h-full col-span-12 p-4 text-base text-center bg-white rounded-2xl lg:col-span-3 dark:bg-gray-800 ">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl dark:text-purple-200 dark:bg-gray-800">
          <Navbar />
 
        
          <Component {...pageProps} key={router.route} />
      
      </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
