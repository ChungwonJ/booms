import Guide from "@/pages/Modal/Guide";
import Router from "next/router";
import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

function Header(props) {
  const { t } = useTranslation();
  const [modal, setModal] = useState(false)
  return (
    <>
      <header>
        <p
          className="headerTxt"
          onClick={() => { Router.push('/') }}
        >
          CW BoomS
        </p>
        <p className="guide" onClick={() => { setModal(true) }}>
          {t('header1')}
        </p>
      </header>
      {modal && <Guide setModal={setModal} />}
    </>
  );
}

export default Header;
