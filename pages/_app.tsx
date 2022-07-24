import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 lg:48 my-14">
      <div className="col-span-12 p-4 text-center bg-white rounded-2xl lg:col-span-3" >
       < Sidebar/>
      </div>
      <div className="col-span-12 bg-white lg:col-span-9 rounded-2xl">
        <Navbar/>
        <Component {...pageProps} />
      </div>
    </div>
  )


}

export default MyApp
