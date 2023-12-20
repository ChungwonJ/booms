import React from 'react'
import { useSelector } from 'react-redux';
import SlotMachineFour from './SlotMachineFour';

function SlotTwo(props) {
    const blackNightInput = useSelector(state => state.value);
  return (
    <div>
        <SlotMachineFour symbols={blackNightInput}/>
    </div>
  )
}

export default SlotTwo