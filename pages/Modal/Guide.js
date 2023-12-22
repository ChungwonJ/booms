import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Guide(props) {
  const [modalHidden, setModalHidden] = useState('modalBlack')
  console.log('props.setModal : ', props.setModal)
  const handleClick = () => {
    setModalHidden('modalBlack active')
    props.setModal(false)
  }
  
  return (
    <>
      <div className={modalHidden}>
        <div className='modalGrid'>
          <div className='modalInner guideModal' style={{ textAlign: 'start' }}>
            <h1 style={{textAlign : 'center',color : 'red', fontWeight:'700',marginBottom:'20px'}}>게임가이드</h1>
            <p>
              1. 이름을 입력한다 (인원수만큼 추가버튼을 누른다)
              <br />
              <br />
              2. 벌주를 입력하고 설정버튼을 누른다
              <br />
              ex&#41; 맥주컵에 소주 2 맥주 2비율
              <br />
              벌주는 비밀리에 작성하는것이니 설정을 눌러야 벌주를 추가할 수 있습니다.
              <br />
              <br />
              3. 잔수를 입력하고 설정버튼을 누른다
              <br />
              잔수도 비밀리에 작성하는것이니 설정을 눌러야 잔수를 추가할 수 있습니다.
              <br />
              <br />
              4. 가운데에 박스를 클릭합니다. 박스는 클릭수가 1~31중 랜덤으로 생성됩니다.
              <br />
              한번이상은 꼭 클릭하고 턴을 넘기고싶으면 밑에 스탑버튼을 클릭합니다.
              <br />
              유저선택 버튼을 클릭하면 랜덤으로 이름이 나옵니다
              <br />
              스탑버튼을 누른 유저도 다시 나올수 있습니다.
              <br />
              이름이 나온유저는 다시 클릭을 한번이상 해야 유저를 넘길수 있습니다.
              <br />
              <br />
              5. 랜덤으로 주어진 클릭수에 맞는 유저가 당첨입니다
              <br />
              벌칙확인을 누르면 벌칙을 랜덤으로 지정하는 슬롯으로 넘어갑니다
              <br />
              <br />
              6. 돌리기를 누르면 슬롯이 돌아가고 멈춰를 클릭하면 유저가 지정한 벌주와 잔수가 나오고 AI가 지정한 누구와 함께 행동이 나옵니다.
              <br />
              7. 벌주를 마시면 벌주 제조하기 버튼을 클릭합니다 그럼 다시 벌주를 제조할 수 있습니다.
              <br />
              <br />
              8. 흑기사를 요청하고 싶으면 흑기사 버튼을 누릅니다.
              <br />
              흑기사 거절시 벌칙 2배이니 신중히 생각하고 버튼을 누릅니다.
              <br />
              <br />
              9. 취소를 클릭하면 벌주 제조하는 페이지로 돌아가서 다시 벌주를 제조하고 플레이하면 됩니다.
              <br />
              <br />
              10. 흑기사 소원을 참여한 유저가 돌아가면서 작성합니다.
              <br />
              소원은 비밀리에 작성하는것이니 설정을 눌러야 소원을 추가할 수 있습니다.
              <br />
              <br />
              11. 시작버튼을 클릭하면 흑기사 소원을 지정하는 슬롯이 나옵니다
              <br />
              <br />
              12. 돌리기를 클릭하면 작성한 소원에 슬롯이 돌아갑니다.
              <br />
              <br />
              13. 멈춰를 클릭하면 유저가 작성한 소원이 나옵니다.
              <br />
              <br />
              14. 소원을 끝마치면 다시 벌주를 제조하러 돌아갑니다.
            </p>
          </div>
          <Button className='guideBtn' onClick={() => { handleClick() }}>닫기</Button>
        </div>
      </div>
    </>
  )
}

export default Guide