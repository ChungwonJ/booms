import React, { useState } from 'react';
import UtillBtn from '../atoms/button/UtillBtn';

function Random({ names, text, modal, textTwo }) {
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
  };

  return (
    <>
      <div>
        {selectedName ? (
          <div>
            <p>선택된 이름: {selectedName}</p>
            <UtillBtn
              textTwo={textTwo}
              onClick={() => { modal(false) }}
            />
          </div>
        ) : (
          <div>
            <p>버튼을 눌러 랜덤 이름 선택하기</p>
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

