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
            placeholder='벌주를 입력해주세요'
            text='벌주는 비밀이지요~'
            drinkInput={props.drinkInput}
            select={props.select}
            setSelect={props.setSelect}
            onChange={props.onChange}
          />
        </div>
        <div>
          <UserBtn
            btnTxt='삭제'
            variant="danger"
            disabled={props.disabled}
            onClick={props.onClick}
          />
        </div>
      </div>
    </>
  )
}

export default DrinkOrganisms