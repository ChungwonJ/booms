import React, { useState } from 'react';
import UserBtn from '../atoms/button/UserBtn';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setValue } from '@/redux/Store';
import UserOrgamisms from '../organisms/UserOrgamisms';

function UserInputMain() {
  const dispatch = useDispatch();
  const router = useRouter()

  const [inputs, setInputs] = useState(['']); // 입력 값들을 담을 상태
  const [select, setSelect] = useState(false)
console.log('inputs',inputs)
  // 새로운 입력 추가
  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };
console.log('inputs :' ,inputs)
  // 입력 제거
  const handleRemoveInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  // 입력 값이 변경될 때 호출되는 함수
  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleClick = () => {
    if (inputs.some((value) => value.trim() === '')) {
      alert('아이디를 입력해주세요');
      return;
    } else {
      router.push('/Drink');
      dispatch(setValue(inputs));
    }
  };

  return (
    <>
      <div>
        {inputs.map((input, index) => (
          <div key={index} className='mainUser'>
            <UserOrgamisms
              value={input}
              placeholder="유저를 입력해주세요"
              btnTxt='삭제'
              variant="danger"
              select={select}
              setSelect={setSelect}
              onChange={(e) => handleChange(index, e.target.value)}
              onClick={() => { handleRemoveInput(index) }}
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

export default UserInputMain;
