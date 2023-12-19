import React from 'react'
import { Button } from 'react-bootstrap'

function UtillBtn(props) {
  return (
    <>
      <Button
        disabled={props.disabled}
        onClick={props.onClick}
      >
        {props.text}
      </Button>
    </>
  )
}

export default UtillBtn