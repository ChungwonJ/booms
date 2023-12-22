import React, { useState, useEffect } from 'react';
import UserBtn from '../atoms/button/UserBtn';
import DrinkOrganisms from '../organisms/DrinkOrganisms';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setDrinkValue } from '@/redux/Store';
import { useTranslation } from 'react-i18next';

function DrinkInput() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter()
  const [drinkInput, setdrinkInput] = useState(['']); // 입력 값들을 담을 상태
  const [select, setSelect] = useState(false)
  console.log('drinkInput :', drinkInput)
  // 새로운 입력 추가
  const handleAddInput = () => {
    setdrinkInput([...drinkInput, '']);
    setSelect(false)
  };

  // 입력 제거
  const handleRemoveInput = (index) => {
    const newdrinkInput = [...drinkInput];
    newdrinkInput.splice(index, 1);
    setdrinkInput(newdrinkInput);
  };

  // 입력 값이 변경될 때 호출되는 함수
  const handleChange = (index, value) => {
    const newdrinkInput = [...drinkInput];
    newdrinkInput[index] = value;
    setdrinkInput(newdrinkInput);
  };

  const handleClick = () => {
    if (drinkInput.some((value) => value.trim() === '')) {
      alert(t('drink1'))
      return
    }
    dispatch(setDrinkValue(drinkInput));
    router.push('/Choice')
  };

  return (
    <>
      <div>
        {drinkInput.map((drinkInput, index) => (
          <div key={index}>
            <DrinkOrganisms
              value={drinkInput}
              disabled={drinkInput.length === 1}
              select={select}
              setSelect={setSelect}
              placeholder={t('drink2')}
              text={t('drink3')}
              onChange={(e) => handleChange(index, e.target.value)}
              onClick={() => { handleRemoveInput(index) }}
            />
          </div>
        ))}
        <div style={{ display: 'flex', gap: '20px' }}>
          <UserBtn
            btnTxt={t('main3')}
            disabled={select === false}
            onClick={() => { handleAddInput() }}
            variant="primary"
          />
        </div>
        <UserBtn
          onClick={() => { handleClick() }}
          disabled={select === false}
          btnTxt={t('main4')}
          variant="success"
        />
      </div>
    </>
  );
}

export default DrinkInput;