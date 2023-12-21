import React from 'react'
import { Button } from 'react-bootstrap'
import { useRouter } from 'next/router'

function ChoiceOrganisms() {
  const router = useRouter()
  return (
    <>

      <Button onClick={()=>{router.push('/Game')}}>설정하기</Button>
    </>
  )
}

export default ChoiceOrganisms