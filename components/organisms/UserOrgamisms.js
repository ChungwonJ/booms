import React from 'react'
import UserBtn from '../atoms/button/UserBtn'
import SecretFormTwo from '../molecules/SecretFormTwo'

function UserOrgamisms(props) {
  return (
    <>
      <div className='drinkOrganisms'>
        <div>
          <SecretFormTwo
            value={props.value}
            placeholder='이름을 입력해주세요'
            select={props.select}
            setSelect={props.setSelect}
            onChange={props.onChange}
          />
        </div>
        <div>
          <UserBtn
            btnTxt='삭제'
            variant="danger"
            disabled={props.disabled}
            onClick={props.onClick}
          />
        </div>
      </div>
    </>
  )
}

export default UserOrgamisms