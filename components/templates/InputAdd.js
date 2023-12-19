import React, { useState } from 'react';
import UserInput from '../atoms/input/UserInput';
import UserBtn from '../atoms/button/UserBtn';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setValue } from '@/redux/Store';

function InputAdd() {
  const dispatch = useDispatch();
  const router = useRouter()
  const value = useSelector(state => state.value);

  const [inputs, setInputs] = useState(['']); // 입력 값들을 담을 상태

  // 새로운 입력 추가
  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

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
    dispatch(setValue(inputs));
    router.push('/Drink')
  };

  return (
    <>
      <div>
        {inputs.map((input, index) => (
          <div key={index} className='mainUser'>
            <div>
              <UserInput
                value={input}
                placeholder="유저를 입력해주세요"
                onChange={(e) => handleChange(index, e.target.value)}
              />
            </div>
            <div>
              <UserBtn
                onClick={() => { handleRemoveInput(index) }}
                btnTxt='삭제'
                variant="danger"
                disabled={inputs.length === 1}
              />
            </div>
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
        {/* {value.map((item, index) => (
          <p key={index}>{item}</p>
        ))} */}
      </div>
    </>
  );
}

export default InputAdd;
