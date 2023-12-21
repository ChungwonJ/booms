import React from 'react'
import { useTranslation } from 'react-i18next';

function Test1() {
    const { t } = useTranslation();
  return (
    <>
      <div className='test1'>
        {t('test2')}
      </div>
    </>
  )
}

export default Test1