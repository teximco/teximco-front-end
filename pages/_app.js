import '../styles/globals.css'
import 'animate.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';


function MyApp({ Component, pageProps }) {
  return( <>
    <Component {...pageProps} />
    <ToastContainer 
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
    </>)
}

export default MyApp
