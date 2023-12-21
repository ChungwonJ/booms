import Layout from '@/components/templates/LayOut';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.scss'
import { Provider } from 'react-redux';
import store from '@/redux/Store';
import i18n from "@/lang/i18n";
import { I18nextProvider } from "react-i18next";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [lang, setLang] = useState("ko"); // 초기 언어 설정

  const changeLang = (e) => {
    const { value } = e.target;
    i18n.changeLanguage(value);
    setLang(value);
  };

  return (
    <>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </I18nextProvider>
      </Provider>

      <div className='lang'>
        <label className="cursor-pointer">
          <input
            className="cursor-pointer"
            style={{ marginRight: "3px" }}
            type="radio"
            name="lang"
            value="ko"
            checked={lang === "ko"}
            onChange={changeLang}
          />
          한국어
        </label>

        {/* <label className="cursor-pointer">
          <input
            className="cursor-pointer"
            style={{ marginRight: "3px" }}
            type="radio"
            name="lang"
            value="en"
            checked={lang === "en"}
            onChange={changeLang}
          />
          English
        </label> */}

        <label className="cursor-pointer">
          <input
            className="cursor-pointer"
            style={{ marginRight: "3px" }}
            type="radio"
            name="lang"
            value="jp"
            checked={lang === "jp"}
            onChange={changeLang}
          />
          日本語
        </label>
      </div>
    </>
  );
}