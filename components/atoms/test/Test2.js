import React from 'react'
import { useTranslation } from 'react-i18next';

function Test2() {
  const { t } = useTranslation();
  return (
    <>
      <div className='test2'>
        <h1>크으~~~</h1>
        <img src="/images/ca2.png" alt="" />
      </div>
    </>
  )
}

export default Test2