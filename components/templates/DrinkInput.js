import React, { useState } from 'react';
import UserBtn from '../atoms/button/UserBtn';
import DrinkOrganisms from '../organisms/DrinkOrganisms';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setDrinkValue } from '@/redux/Store';

function DrinkInput() {
  const dispatch = useDispatch();
  const router = useRouter()
  const [drinkInput, setdrinkInput] = useState(['']); // 입력 값들을 담을 상태
  const [select, setSelect] = useState(false)

  // 새로운 입력 추가
  const handleAddInput = () => {
    setdrinkInput([...drinkInput, '']);
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
    dispatch(setDrinkValue(drinkInput));
    router.push('/Game')
  };

  return (
    <>
      <div>
        {drinkInput.map((input, index) => (
          <div key={index}>
            <DrinkOrganisms
              value={input}
              disabled={drinkInput.length === 1}
              select={select}
              setSelect={setSelect}
              onChange={(e) => handleChange(index, e.target.value)}
              onClick={handleRemoveInput}
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

export default DrinkInput;