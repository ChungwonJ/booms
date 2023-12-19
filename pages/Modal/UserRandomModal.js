import Random from '@/components/molecules/Random'
import React from 'react'
import { useSelector } from 'react-redux';

function UserRandomModal(props) {
  const value = useSelector(state => state.value);
  return (
    <>
      <div className='modalBlack'>
        <div className='modalGrid'>
          <div className='modalInner'>
            <Random
              names={value}
              text='설정'
              textTwo='닫기'
              modal={props.setModalTwo}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default UserRandomModal