import React from 'react'
import SlotMachineThree from './SlotMachineThree';
import { useSelector } from 'react-redux';
import { WHO, HOW } from '@/define/PenaltyList';

function Slot(props) {
  const drinkValue = useSelector(state => state.drinkValue);
  const quanity = useSelector(state => state.quanity);
  console.log('drinkValue : ', drinkValue)
  return (
    <>
      <div>
        <SlotMachineThree
          symbols={drinkValue}
          symbolsOne={quanity}
          symbolsTwo={WHO}
          symbolsThree={HOW}
          onClick={props.onClick}
        />
      </div>
    </>
  )
}

export default Slot