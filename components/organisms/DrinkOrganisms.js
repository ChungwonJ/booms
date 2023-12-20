import React, { useState } from 'react';
import UserBtn from '../atoms/button/UserBtn';
import SecretForm from '../molecules/SecretForm';

function DrinkOrganisms(props) {
  console.log('props.drinkInput:', props.drinkInput);
  return (
    <>
      <div className='drinkOrganisms'>
        <div>
          <SecretForm
            value={props.value}
            placeholder={props.placeholder}
            text={props.text}
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