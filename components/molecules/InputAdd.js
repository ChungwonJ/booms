import React , {useState}  from 'react';
import UserInput from '../atoms/input/UserInput';
import UserBtn from '../atoms/button/UserBtn';

function InputAdd() {
  const [inputs, setInputs] = useState(['']); // 입력 값들을 담을 상태

  // 입력 값이 변경될 때 호출되는 함수
  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

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

  return (
    <>
      <div>
        {inputs.map((input, index) => (
          <div key={index}>
            <UserInput value={input} onChange={(value) => handleChange(index, value)} />
            <UserBtn onClick={() => handleRemoveInput(index)}>-</UserBtn>
          </div>
        ))}
        <UserBtn onClick={handleAddInput}>+</UserBtn>
      </div>
    </>
  );
}

export default InputAdd;
