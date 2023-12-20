import React from 'react'
import { Button } from 'react-bootstrap'

function HideBtn(props) {
    console.log(' props.isHidden :' , props.isHidden)
  return (
    <>
        <Button
            variant={props.isHidden ? 'danger' : 'primary'}
            style={{width: '100%'}}
            onClick={props.onClick}
        >
            {props.isHidden ? '수정' : '설정'}
        </Button>
    </>
  )
}

export default HideBtn