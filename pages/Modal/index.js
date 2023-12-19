import React, { useState } from 'react'

function Modal(props) {
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
                <p>당첨</p>
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
              <div className='modalInner'>
                <p>당첨</p>
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