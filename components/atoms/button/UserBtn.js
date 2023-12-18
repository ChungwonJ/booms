import React from 'react'
import { Button } from 'react-bootstrap'

function UserBtn(props) {
  return (
    <>
        <Button
            style={{width: '100%',marginBottom : '10px'}}
            variant={props.variant}
            disabled={props.disabled}
            onClick={props.onClick}
        >
            {props.btnTxt}
        </Button>
    </>
  )
}

export default UserBtn