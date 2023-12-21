import React, { useState,useEffect } from 'react';
import UserBtn from '../atoms/button/UserBtn';
import DrinkOrganisms from '../organisms/DrinkOrganisms';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setQuanity } from '@/redux/Store';

function ChoiceInput(props) {
  const dispatch = useDispatch();
  const router = useRouter()
  const [quanity, setquanity] = useState(['']); // 입력 값들을 담을 상태
  const [select, setSelect] = useState(false)
console.log('quanity : ' ,quanity)
  // 새로운 입력 추가
  const handleAddInput = () => {
    setquanity([...quanity, '']);
    setSelect(false)
  };

  // 입력 제거
  const handleRemoveInput = (index) => {
    const newquanity = [...quanity];
    newquanity.splice(index, 1);
    setquanity(newquanity);
  };

  // 입력 값이 변경될 때 호출되는 함수
  const handleChange = (index, value) => {
    const newquanity = [...quanity];
    newquanity[index] = value;
    setquanity(newquanity);
  };

  const handleClick = () => {
    if (select === false || quanity.some((value) => value.trim() === '')) {
      alert('잔수를 입력해주세요')
      return
    }
    dispatch(setQuanity(quanity));
    router.push('/Game')
  };

  useEffect(() => {
    console.log('select:', select);
  }, [select]);

  return (
    <>
      <div>
        {quanity.map((input, index) => (
          <div key={index}>
            <DrinkOrganisms
              value={input}
              disabled={quanity.length === 1}
              select={select}
              setSelect={setSelect}
              placeholder={'몇잔을 선택할까요?'}
              text={'잔수는 비밀~~'}
              onChange={(e) => handleChange(index, e.target.value)}
              onClick={() => { handleRemoveInput() }}
            />
          </div>
        ))}
        <div style={{ display: 'flex', gap: '20px' }}>
          <UserBtn
            btnTxt='추가하기'
            disabled={select === false}
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

export default ChoiceInput;