import React, { useState } from 'react';
import UserInput from '../atoms/input/UserInput'
import HideBtn from '../atoms/button/HideBtn'

function SecretFormTwo(props) {
  const handleClick = () => {
    if (props.value.length === 0) {
      alert('유저입력칸이 비어있습니다')
      return
    } else {
      props.setSelect(!props.select)
    }
  }
  return (
    <>
      <div className='secretForm'>
        <div className='secretInput'>
          <UserInput
            type="text"
            placeholder={props.placeholder}
            style={{ marginBottom: '10px' }}
            value={props.value}
            onChange={props.onChange}
          />
          <p className={props.select ? 'secretInputSucess active' : 'secretInputSucess'}>{props.text}</p>
        </div>
        <div>
          <HideBtn
            select={props.select}
            onClick={() => { handleClick() }}
          />
        </div>
      </div>
    </>
  )
}

export default SecretFormTwo