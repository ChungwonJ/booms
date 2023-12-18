import Layout from '@/components/templates/LayOut';
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
    return (
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }