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
        <div className='modalGrid guideModalGrid'>
          <div className='modalInner guideModal' style={{ textAlign: 'start' }}>
            <h1 style={{textAlign : 'center',color : 'red', fontWeight:'700',marginBottom:'20px'}}>게임가이드</h1>
            <div className='guides'>
              오늘 게임에 참여하는 사람은 홍길동,김춘자,장도칠,최시은 입니다<br/>
              그럼 게임을 시작해볼까요?<br/>
              <br/><br/>
              첫번째 : 이름을 입력합니다<br/>
              <img src="/images/img1.png" alt=""/><br/>
              두번째 : 초록색 시작하기 버튼을 클릭합니다
              <br/><br/>
              자! 이제 벌주를 정할시간입니다ㅎ<br/>
              내가 마실수도 있으니 벌주는 신중하게 선택해주세요~ㅎ
              <br/><br/>
              첫번째 : 벌주를 입력합니다<br/>
              <img src="/images/img2.png" alt=""/><br/>
              두번째 : 설정버튼을 클릭하여 내가 설정한 벌주를 완료하고 오른쪽 사람에게 핸드폰을 넘깁니다<br/>
              <img src="/images/img3.png" alt=""/><br/>
              세번째 : 핸드폰을 건내받은 사람은 추가하기 버튼을 클릭합니다<br/>
              <img src="/images/img4.png" alt=""/><br/>
              네번째 : 이와같이 인원수에 맞게 벌주를 선택후 시작하기 버튼을 클릭합니다<br/>
              <img src="/images/img5" alt=""/><br/>
              <br/><br/>
              자! 이제 벌주를 정하였으니 몇잔으로 할지 정해볼게요!<br/>
              <br/><br/>
              첫번째 : 잔수를 입력합니다<br/>
              <img src="/images/img6.png" alt=""/><br/>
              두번째 : 설정버튼을 클릭하여 내가 설정한 잔수를 완료하고 오른쪽 사람에게 핸드폰을 넘깁니다<br/>
              <img src="/images/img7.png" alt=""/><br/>
              세번째 : 핸드폰을 건내받은 사람은 추가하기 버튼을 클릭합니다<br/>
              <img src="/images/img8.png" alt=""/><br/>
              네번째 : 이와같이 인원수에 맞게 잔수를 선택후 시작하기 버튼을 클릭합니다<br/>
              <img src="/images/img9.png" alt=""/><br/>
              <br/><br/>
              이제 마실술과 양을 다정했으니 게임을 시작해볼까요?ㅋㅋㅋ
              <br/><br/>
              이제 게임으로 들어왔습니다<br/>
              가운데 우리 귀여운 고민이와 그 밑에 버튼이 보이시나요???<br/>
              이제 게임을 설명해드리겠습니다ㅎ<br/>
              첫번째 : 우리 귀여운 고민이에 클릭수는 1번부터 31번사이에 랜덤으로 클릭할 수 있는 숫자가 생성됩니다<br/>
              <img src="/images/img21.png" alt=""/>
              두번째 : 클릭할 수 있는 횟수는 정해져 있지않지만 무조건 한번이상은 클릭하여야 합니다<br/>
              클릭을 우리 고민이가 술을마셔요ㅋㅋㅋ<br/>
              <img src="/images/img10.png" alt=""/><br/>
              세번째 : 클릭을 그만하고 다음 유저에게 핸드폰을 넘기고 싶으면 STOP버튼을 클릭합니다<br/>
              <img src="/images/img11.png" alt=""/><br/>
              네번째 : 유저선택이라는 버튼을 클릭할 수있는 모달이 나옵니다<br/>
              <img src="/images/img12.png" alt=""/><br/>
              다섯번째 : 버튼을 클릭하면 네명에 유저중 랜덤으로 유저를 선택합니다<br/>
              <span>랜덤으로 선택을 하기때문에 스탑을 누른사람이 또 걸릴수도 있습니다</span><br/>
              <img src="/images/img13.png" alt=""/><br/>
              여섯번째 : AI에 선택을 받은 유저는 게임을 진행합니다<br/>
              <br/><br/>
              <span>당첨!!!!!!!!!!!!!!</span><br/>
              <img src="/images/img14.png" alt=""/><br/>
              컴퓨터가 랜덤으로 설정한 클릭수에 당첨되었어요ㅎㅎㅎ<br/>
              자! 이제 벌칙을 확인하러 가볼까요?ㅋㅋㅋㅋ<br/>
              <br/><br/>
              <span>짜잔~~~~벌칙모달이 나왔어요~~~~</span><br/>
              <img src="/images/img15.png" alt=""/><br/>
              벌칙에 대해서 설명해줄께요ㅎ<br/>
              첫번째는 유저가 선택한 벌주<br/>
              두번째는 유저가 선택한 벌주수량<br/>
              세번째는 AI가 선택한 누구와<br/>
              네번째는 AI가 선택한 수행할 행동이예요ㅎㅎㅎㅎ<br/>
              <br/><br/>
              이제 돌리기를 클릭하면 위에 선택한 4가지가 슬롯으로 돌아갑니다<br/>
              그리고 멈춰를 클릭하면 설정한 4가지에 항목에서 랜덤으로 벌칙이 선택이됩니다<br/>
              <img src="/images/img16.png" alt=""/>
              <span>
                나와있는 벌칙을 모두 수행하면 벌주설정하기를 클릭하면 다시 벌주를 설정하고 게임을 진행할수 있어요ㅎ
              </span><br/><br/>
              <h1>하지만!!!!!!</h1><br/>
              내가 수행하기 힘들다라고 판단이 들면 한명을 지목하세요<br/>
              흑기사가 수락을 한다면 흑기사 버튼을 클릭해주세요!<br/>
              <span>단!흑기사를 거절하면 벌칙에 2배가 되니 신중히 선택하여주세요ㅎㅎ</span><br/>
              <br/><br/>
              흑기사를 선택하였다면 소원을 적을수 있는 모달창이 나와요<br/>
              <img src="/images/img17.png" alt=""/><br/>
              벌주를 적을때와 동일하게 각자의 소원을 한명씩 적어요<br/>
              <img src="/images/img18.png" alt=""/><br/>
              이제 소원이 흑기사에 소원이 뭔지 알아보는 모달이 나왔네요?ㅎㅎㅎ<br/>
              자 한번 돌려볼까요???ㅎㅎㅎ<br/>
              <img src="/images/img19.png" alt=""/><br/>
              <span>멈춰!!!!!!!!!!</span><br/>
              <img src="/images/img20.png" alt=""/><br/>
              흑기사에 소원이 나왔네요ㅎㅎㅎ<br/>
              흑기사에 소원을 수행하였다면 버튼을 클릭하여 다시 벌주를 제조하고 플레이하면 됩니다ㅎㅎㅎㅎ<br/>
              <br/><br/>
              안녕하십니까 CW Booms 개발자 청원입니다<br/>
              여기까지가 제가의도한 CW Booms 게임에 개발이였습니다<br/>
              술자리가 많아지는 연말에 재미있게 플레이해보시고 즐거운 술자리가 되길바라면서<br/>
              나도 술먹으러 갑니다요옹~~~~ㅎㅎㅎㅎ<br/>
            </div>
          </div>
          <Button className='guideBtn' onClick={() => { handleClick() }}>닫기</Button>
        </div>
      </div>
    </>
  )
}

export default Guide