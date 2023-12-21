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
              text='유저선택'
              textTwo='확인'
              modal={props.setModalTwo}
              disabledBtn={props.disabledBtn}
              selectedName={props.selectedName}
              setSelectedName={props.setSelectedName}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default UserRandomModal