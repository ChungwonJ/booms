import React, { useState, useEffect } from 'react';
import UserBtn from '../atoms/button/UserBtn';
import DrinkOrganisms from '../organisms/DrinkOrganisms';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setQuanity } from '@/redux/Store';
import { useTranslation } from 'react-i18next';

function ChoiceInput(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter()
  const [quanity, setquanity] = useState(['']); // 입력 값들을 담을 상태
  const [select, setSelect] = useState(false)
  console.log('quanity : ', quanity)
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
    if (quanity.some((value) => value.trim() === '')) {
      alert(t('choice1'))
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
              placeholder={t('choice2')}
              text={t('choice3')}
              onChange={(e) => handleChange(index, e.target.value)}
              onClick={() => { handleRemoveInput() }}
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
          disabled={select === false}
          onClick={() => { handleClick() }}
          btnTxt={t('main4')}
          variant="success"
        />
      </div>
    </>
  );
}

export default ChoiceInput;