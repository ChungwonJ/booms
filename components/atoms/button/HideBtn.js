import React from 'react'
import { Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';

function HideBtn(props) {
    const { t } = useTranslation();
    console.log(' props.isHidden :' , props.isHidden)
  return (
    <>
        <Button
            variant={props.isHidden ? 'danger' : 'primary'}
            style={{width: '100%'}}
            onClick={props.onClick}
        >
            {props.isHidden ? t('hide1') : t('hide2')}
        </Button>
    </>
  )
}

export default HideBtn