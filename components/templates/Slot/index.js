import React from 'react'
import SlotMachineThree from './SlotMachineThree';
import { useSelector } from 'react-redux';
import {QUANITY,WHO,HOW} from '@/define/PenaltyList';

function Slot(props) {
    const drinkValue = useSelector(state => state.value);
    console.log('props.list : ', props.list)
    return (
        <>
            <div>
                <SlotMachineThree
                    symbols={drinkValue}
                    symbolsOne={QUANITY}
                    symbolsTwo={WHO}
                    symbolsThree={HOW}
                    onClick={props.onClick}
                />
            </div>
        </>
    )
}

export default Slot