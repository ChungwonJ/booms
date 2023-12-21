import React, { useState } from 'react'
import Modal from '../Modal';
import UtillBtn from '@/components/atoms/button/UtillBtn';
import UserRandomModal from '../Modal/UserRandomModal';
import Test1 from '@/components/atoms/test/Test1';
import Test2 from '@/components/atoms/test/Test2';

function Game() {
  const [hit, setHit] = useState(<Test1/>)
  const [clickCount, setClickCount] = useState(Math.floor(Math.random() * 31));
  const [modal, setModal] = useState(false)
  const [modalTwo, setModalTwo] = useState(false)
  const [userCount, setUserCount] = useState(1)
  const [disabledBtn, setDisabledBtn] = useState(true)
  const [selectedName, setSelectedName] = useState(null);

  console.log('clickCount :', clickCount)

  const handleClick = () => {
    setClickCount(prevClickCount => prevClickCount - 1);
    setUserCount(prevUserCount => prevUserCount - 1);
    setHit(<Test2/>);

    setTimeout(() => {
      setHit(<Test1/>);
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
          <div onClick={() => { handleClick() }}>{hit}</div>
        </div>
        <div>
          <UtillBtn
            text='STOP!!!!'
            disabled={disabledBtn}
            onClick={() => { setModalTwo(true) }}
          />
        </div>
      </div>
      {
        modal &&
        <Modal
          setModal={setModal}
          selectedName={selectedName}
        />
      }

      {
        modalTwo &&
        <UserRandomModal
          setModalTwo={setModalTwo}
          disabledBtn={setDisabledBtn}
          selectedName={selectedName}
          setSelectedName={setSelectedName}
        />
      }
    </>
  )
}

export default Game