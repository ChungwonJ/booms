import BlackNightInput from '@/components/templates/BlackNightInput';
import Slot from '@/components/templates/Slot';
import SlotTwo from '@/components/templates/Slot/SlotTwo';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';

function Modal(props) {
  const router = useRouter()
  const [page, setPage] = useState(1)

  const handleClick = () => {
    setPage(page + 1)
  }

  let Component;
  switch (page) {
    case 1:
      Component = (
        <>
          <div className='modalBlack'>
            <div className='modalGrid'>
              <div className='modalInner'>
                <p style={{ color: 'red', fontSize: '26px', fontWeight: '700' }}>당첨!!!!</p>
                <Button onClick={handleClick}>벌칙확인</Button>
              </div>
            </div>
          </div>
        </>
      );
      break;

    case 2:
      Component = (
        <>
          <div className='modalBlack'>
            <div className='modalGrid'>
              <div className='modalInner modalInnerTwo'>
                <Slot
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>
        </>
      );
      break;

    case 3:
      Component = (
        <>
          <div className='modalBlack'>
            <div className='modalGrid'>
              <div className='modalInner'>
                <BlackNightInput
                  onClick={handleClick}
                />
                <div style={{marginTop : '5px' ,width: '100%'}}>
                <Button style={{width: '100%'}} onClick={() => { router.push('/Drink') }}>취소</Button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
      break;

    case 4:
      Component = (
        <>
          <div className='modalBlack'>
            <div className='modalGrid'>
              <div className='modalInner'>
                <SlotTwo />
              </div>
            </div>
          </div>
        </>
      );
      break;
  }

  return (
    <>
      {Component}
    </>
  )
}

export default Modal