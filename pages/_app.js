import Layout from '@/components/templates/LayOut';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.scss'
import { Provider } from 'react-redux';
import store from '@/redux/Store';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}