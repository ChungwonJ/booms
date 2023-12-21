import React from 'react'
import UserBtn from '../atoms/button/UserBtn'
import SecretFormTwo from '../molecules/SecretFormTwo'
import { useTranslation } from 'react-i18next';

function UserOrgamisms(props) {
  const { t } = useTranslation();
  return (
    <>
      <div className='drinkOrganisms'>
        <div>
          <SecretFormTwo
            value={props.value}
            placeholder={t('main1')}
            select={props.select}
            setSelect={props.setSelect}
            onChange={props.onChange}
          />
        </div>
        <div>
          <UserBtn
            btnTxt={t('main2')}
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