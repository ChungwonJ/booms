import React from 'react'
import { useTranslation } from 'react-i18next';

function Test1() {
    const { t } = useTranslation();
  return (
    <>
      <div className='test1'>
        <h1>클릭하세용~~~</h1>
        <img src="/images/ca1.png" alt=""/>
      </div>
    </>
  )
}

export default Test1