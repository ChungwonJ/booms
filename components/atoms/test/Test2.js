import React from 'react'
import { useTranslation } from 'react-i18next';

function Test2() {
    const { t } = useTranslation();
  return (
    <>
    <div className='test2'>
      {t('test1')}
    </div>
  </>
  )
}

export default Test2