import React, { useState } from 'react';
import UserInput from '../atoms/input/UserInput'
import HideBtn from '../atoms/button/HideBtn'

function SecretForm(props) {
  const [select, setSelect] = useState(false)

  const handleClick = () => {
    setSelect(!select)
  }
  return (
    <>
      <div className='secretForm'>
        <div className='secretInput'>
          <UserInput
            type="text"
            placeholder={props.placeholder}
            style={{ marginBottom: '10px' }}
            disabled={select === true}
            value={props.value}
            onChange={props.onChange}
          />

          <p className={select ? 'secretInputSucess active' : 'secretInputSucess'}>{props.text}</p>

        </div>
        <div>
          <HideBtn
            select={select}
            onClick={() => { handleClick() }}
          />
        </div>
      </div>
    </>
  )
}

export default SecretForm