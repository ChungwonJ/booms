import React, { useState,useEffect } from 'react';
import UserBtn from '../atoms/button/UserBtn';
import DrinkOrganisms from '../organisms/DrinkOrganisms';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setBlackNightInput } from '@/redux/Store';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function BlackNightInput(props) {
    const { t } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter()
  const [blackNightInput, setblackNightInput] = useState(['']); // 입력 값들을 담을 상태
  const [select, setSelect] = useState(false)
console.log('blackNightInput : ' ,blackNightInput)
  // 새로운 입력 추가
  const handleAddInput = () => {
    setblackNightInput([...blackNightInput, '']);
    setSelect(false)
  };

  // 입력 제거
  const handleRemoveInput = (index) => {
    const newblackNightInput = [...blackNightInput];
    newblackNightInput.splice(index, 1);
    setblackNightInput(newblackNightInput);
  };

  // 입력 값이 변경될 때 호출되는 함수
  const handleChange = (index, value) => {
    const newblackNightInput = [...blackNightInput];
    newblackNightInput[index] = value;
    setblackNightInput(newblackNightInput);
  };

  const handleClick = () => {
    if (select === false || blackNightInput.some((value) => value.trim() === '')) {
      alert(t('black1'))
      return
    }
    dispatch(setBlackNightInput(blackNightInput));
    props.onClick()
  };

  useEffect(() => {
    console.log('select:', select);
  }, [select]);

  return (
    <>
      <div>
        {blackNightInput.map((input, index) => (
          <div key={index}>
            <DrinkOrganisms
              value={input}
              disabled={blackNightInput.length === 1}
              select={select}
              setSelect={setSelect}
              placeholder={t('black2')}
              text={t('black3')}
              onChange={(e) => handleChange(index, e.target.value)}
              onClick={() => { handleRemoveInput() }}
            />
          </div>
        ))}
        <div style={{ display: 'flex', gap: '20px' }}>
          <UserBtn
            btnTxt={t('main3')}
            onClick={() => { handleAddInput() }}
            disabled={select === false}
            variant="primary"
          />
        </div>
        <UserBtn
          onClick={() => { handleClick() }}
          btnTxt={t('main4')}
          variant="success"
        />
      </div>
    </>
  );
}

export default BlackNightInput;