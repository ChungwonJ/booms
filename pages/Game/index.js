import React, { useState } from 'react'
import Modal from '../Modal';
import UtillBtn from '@/components/atoms/button/UtillBtn';
import UserRandomModal from '../Modal/UserRandomModal';

function Game() {
  const [hit, setHit] = useState("때려봐")
  const [clickCount, setClickCount] = useState(Math.floor(Math.random() * 10));
  const [modal, setModal] = useState(false)
  const [modalTwo, setModalTwo] = useState(false)
  const [userCount, setUserCount] = useState(1)
  const [disabledBtn, setDisabledBtn] = useState(true)

  console.log('clickCount :', clickCount)

  const handleClick = () => {
    setClickCount(prevClickCount => prevClickCount - 1);
    setUserCount(prevUserCount => prevUserCount - 1);
    setHit("아파");
    
    setTimeout(() => {
      setHit("때려봐");
    }, 100);
  
    if (clickCount === 1) {
      setModal(true);
    }
  
    setDisabledBtn(false); // 필요한 경우에만 사용
  
    console.log('userCount : ', userCount);
    console.log('disabledBtn : ', disabledBtn);
  };

  return (
    <>
      <div className='main'>
        <div>
          <p onClick={() => { handleClick() }}>{hit}</p>
        </div>
        <div>
          <UtillBtn
            text='테스트'
            disabled={disabledBtn}
            onClick={() => { setModalTwo(true) }}
          />
        </div>
      </div>
      {
        modal &&
        <Modal 
          setModal={setModal}
        />
      }

      {
        modalTwo &&
        <UserRandomModal
          setModalTwo={setModalTwo}
          disabledBtn={setDisabledBtn}
        />
      }
    </>
  )
}

export default Game