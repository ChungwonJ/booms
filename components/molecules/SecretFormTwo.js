import React, { useState } from 'react';
import UserInput from '../atoms/input/UserInput'
import HideBtn from '../atoms/button/HideBtn'

function SecretFormTwo(props) {
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
        </div>
      </div>
    </>
  )
}

export default SecretFormTwo