import React, { useState,useEffect } from 'react';
import UtillBtn from '../atoms/button/UtillBtn';

function Random({ names, text, modal, textTwo, disabledBtn }) {
  const [selectedName, setSelectedName] = useState(null);

  const handleSelectRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    const selected = names[randomIndex];

    // 안전하게 처리: 선택된 이름이 없을 경우에 대한 확인
    if (selected) {
      setSelectedName(selected);
    } else {
      setSelectedName(null); // 또는 원하는 처리를 추가하세요.
    }
    console.log('selectedName : ' , selectedName)
  };

  const handleClick = () =>{
    modal(false)
    disabledBtn(true)
  }

  return (
    <>
      <div>
        {selectedName ? (
          <div style={{textAlign  : 'center'}}>
            <h1 style={{marginBottom : '30px'}}>{selectedName} 당첨!</h1>
            <UtillBtn
              text={textTwo}
              onClick={() => { handleClick() }}
            />
          </div>
        ) : (
          <div style={{display : 'flex', alignItems : 'center'}}>
            <UtillBtn
              text={text}
              onClick={() => { handleSelectRandomName() }}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Random;

