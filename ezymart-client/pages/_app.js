import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider, useDispatch } from 'react-redux';
import store from '../app/store';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Toaster />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}

export default MyApp;
