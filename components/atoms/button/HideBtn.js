import React from 'react'
import { Button } from 'react-bootstrap'

function HideBtn(props) {
  return (
    <>
        <Button
            variant={props.select ? 'danger' : 'primary'}
            style={{width: '100%'}}
            onClick={props.onClick}
        >
            {props.select ? '수정' : '설정'}
        </Button>
    </>
  )
}

export default HideBtn