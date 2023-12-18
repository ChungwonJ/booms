import React, { useState } from 'react'

function Game() {
  const [hit, setHit] = useState(false)
  const [clickCount, setClickCount] = useState(Math.floor(Math.random() * 10));

  console.log('clickCount :', clickCount)

  const handleClick = () => {
    setClickCount(clickCount - 1);

    if (clickCount === 0)
      setHit(true)
  }
  return (
    <div className='main'>
      <div>
        <p onClick={() => { handleClick() }}>{hit === true ? '펑' : '눌러봐'}</p>
      </div>
    </div>
  )
}

export default Game