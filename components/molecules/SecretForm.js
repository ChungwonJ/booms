import React, { useState } from 'react';
import UserInput from '../atoms/input/UserInput'
import HideBtn from '../atoms/button/HideBtn'

function SecretForm(props) {
  const [isHidden, setIsHidden] = useState(false);

  const handleClick = () => {
    if (props.value.length === 0) {
      alert('벌주를 입력해주세요')
      return
    } else {
      props.setSelect(!props.select)
      setIsHidden(!isHidden);
      console.log('props.select :', props.select)
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

          <p className={isHidden ? 'secretInputSucess active' : 'secretInputSucess'}>{props.text}</p>

        </div>
        <div>
          <HideBtn
            select={props.select}
            isHidden={isHidden}
            onClick={() => { handleClick() }}
          />
        </div>
      </div>
    </>
  )
}

export default SecretForm