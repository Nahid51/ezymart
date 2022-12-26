import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider, useDispatch } from 'react-redux';
import store from '../app/store';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}

export default MyApp;
