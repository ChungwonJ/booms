import React, { useState } from 'react';
import UserInput from '../atoms/input/UserInput';
import UserBtn from '../atoms/button/UserBtn';
import  Router  from 'next/router';

function InputAdd() {
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

    return (
        <>
            <div>
                {inputs.map((input, index) => (
                    <div key={index}>
                        <UserInput
                            value={input}
                            placeholder="유저를 입력해주세요"
                            onChange={(e) => handleChange(index, e.target.value)}
                        />
                    </div>
                ))}
                <div style={{display : 'flex',gap:'20px'}}>
                    <UserBtn
                        btnTxt='추가하기'
                        onClick={() => { handleAddInput() }}
                        variant="primary"
                    />
                    <UserBtn
                        onClick={() => {handleRemoveInput()}}
                        btnTxt='삭제하기'
                        variant="danger"
                        disabled={inputs.length === 1}
                    />
                </div>
                <UserBtn
                    onClick={() =>{Router.push('/Drink')} }
                    btnTxt='시작하기'
                    variant="success"
                />
            </div>
        </>
    );
}

export default InputAdd;
