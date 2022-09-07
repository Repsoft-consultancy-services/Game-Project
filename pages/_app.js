import '../styles/globals.css'
import '../styles/swipper.css'
import '../styles/services.css'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'

function MyApp({ Component, pageProps }) {
  return <>
  <Navbar></Navbar>
  <Component {...pageProps} />
  <Footer></Footer>
  </>
  
}

export default MyApp
