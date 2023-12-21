import React, { useState } from 'react';
import UserBtn from '../atoms/button/UserBtn';
import SecretForm from '../molecules/SecretForm';
import { useTranslation } from 'react-i18next';

function DrinkOrganisms(props) {
    const { t } = useTranslation();
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
            btnTxt={t('main2')}
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