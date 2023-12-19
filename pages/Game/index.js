import React, { useState } from 'react'
import Modal from '../Modal';
import UtillBtn from '@/components/atoms/button/UtillBtn';
import UserRandomModal from '../Modal/UserRandomModal';

function Game() {
  const [hit, setHit] = useState("때려봐")
  const [clickCount, setClickCount] = useState(Math.floor(Math.random() * 10));
  const [modal, setModal] = useState(false)
  const [modalTwo, setModalTwo] = useState(false)

  console.log('clickCount :', clickCount)

  const handleClick = () => {
    setClickCount(clickCount - 1);
    setHit("아파");
    setTimeout(() => {
      setHit("때려봐");
    }, 100);

    if (clickCount === 0)
      setModal(true)
  }
  return (
    <>
      <div className='main'>
        <div>
          <p onClick={() => { handleClick() }}>{hit}</p>
        </div>
        <div>
          <UtillBtn
            text='테스트'
            onClick={() => { setModalTwo(true) }}
          />
        </div>
      </div>
      {modal && <Modal />}
      {modalTwo && <UserRandomModal setModalTwo={setModalTwo}/>}
    </>
  )
}

export default Game