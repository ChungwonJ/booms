import React, { useState,useEffect } from 'react';
import UserBtn from '../atoms/button/UserBtn';
import DrinkOrganisms from '../organisms/DrinkOrganisms';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setBlackNightInput } from '@/redux/Store';

function BlackNightInput(props) {
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
      alert('흑기사 소원을 입력해주세요')
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
              placeholder={'소원을 말해봐!'}
              text={'소원은 비밀~'}
              onChange={(e) => handleChange(index, e.target.value)}
              onClick={() => { handleRemoveInput() }}
            />
          </div>
        ))}
        <div style={{ display: 'flex', gap: '20px' }}>
          <UserBtn
            btnTxt='추가하기'
            onClick={() => { handleAddInput() }}
            variant="primary"
          />
        </div>
        <UserBtn
          onClick={() => { handleClick() }}
          btnTxt='시작하기'
          variant="success"
        />
      </div>
    </>
  );
}

export default BlackNightInput;