import React from 'react'
import { Button } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next';

function ChoiceOrganisms() {
  const { t } = useTranslation();
  const router = useRouter()
  return (
    <>

      <Button onClick={()=>{router.push('/Game')}}>{t('hide2')}</Button>
    </>
  )
}

export default ChoiceOrganisms