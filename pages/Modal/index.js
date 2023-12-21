import BlackNightInput from '@/components/templates/BlackNightInput';
import Slot from '@/components/templates/Slot';
import SlotTwo from '@/components/templates/Slot/SlotTwo';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

function Modal(props) {
  const { t } = useTranslation();
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
                <p style={{ color: 'red', fontSize: '26px', fontWeight: '700' }}><span style={{color : '#000'}}>{props.selectedName}</span> {t('modal1')}</p>
                <Button onClick={handleClick}>{t('modal2')}</Button>
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
                <Button style={{width: '100%'}} onClick={() => { router.push('/Drink') }}>{t('modal3')}</Button>
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