import UtillBtn from '@/components/atoms/button/UtillBtn';
import React, { useState } from 'react'

function Game() {
  const [hit, setHit] = useState(false)
  const [clickCount, setClickCount] = useState(Math.floor(Math.random() * 10));
  const [modal, setModal] = useState(false)

  console.log('clickCount :', clickCount)

  const handleClick = () => {
    setClickCount(clickCount - 1);

    if (clickCount === 0)
      setHit(true)

    if (clickCount < 0) {
      setModal(true)
    }
  }
  return (
    <div className='main'>
      <div>
        <p onClick={() => { handleClick() }}>{hit === true ? '펑' : '눌러봐'}</p>
      </div>

      <div>
        {hit === true && <UtillBtn/>}
      </div>
    </div>
  )
}

export default Game