import React, { useState } from 'react';
import UserBtn from '../atoms/button/UserBtn';
import SecretForm from '../molecules/SecretForm';

function DrinkOrganisms(props) {
  return (
    <>
      <div className='drinkOrganisms'>
        <div>
          <SecretForm
            value={props.value}
            placeholder='벌주를 입력하세요'
            text='벌주 선택완료'
            onChange={props.onChange}
            onClick={props.onClick}
          />
        </div>
        <div>
          <UserBtn
            onClick={() => { handleRemoveInput() }}
            btnTxt='삭제'
            variant="danger"
            disabled={props.disabled}
          />
        </div>
      </div>
    </>
  )
}

export default DrinkOrganisms