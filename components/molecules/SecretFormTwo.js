import React, { useState } from 'react';
import UserInput from '../atoms/input/UserInput'

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
        </div>
        <div>
        </div>
      </div>
    </>
  )
}

export default SecretFormTwo