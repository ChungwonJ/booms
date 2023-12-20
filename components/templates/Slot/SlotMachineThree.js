import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';

const SlotMachineThree = ({ symbols, symbolsOne, symbolsTwo, symbolsThree,...props }) => {
  const [spin, setSpin] = useState(false);
  const [buttonCount, setButtonCount] = useState(2);
  const router = useRouter()

  // 각 슬롯에 대한 결과 배열
  const [result, setResult] = useState([]);
  const [resultOne, setResultOne] = useState([]);
  const [resultTwo, setResultTwo] = useState([]);
  const [resultThree, setResultThree] = useState([]);

  // 컴포넌트가 마운트될 때 초기값을 각각 다른 배열로 설정
  useEffect(() => {
    const initialResult = Array.from({ length: symbols.length }, () => '뭐가 나올지 궁금하지?');
    const initialResultOne = Array.from({ length: symbolsOne.length }, () => '뭐가 나올지 궁금하지?');
    const initialResultTwo = Array.from({ length: symbolsTwo.length }, () => '뭐가 나올지 궁금하지?');
    const initialResultThree = Array.from({ length: symbolsTwo.length }, () => '뭐가 나올지 궁금하지?');

    setResult(initialResult);
    setResultOne(initialResultOne);
    setResultTwo(initialResultTwo);
    setResultThree(initialResultThree);
  }, [symbols, symbolsOne, symbolsTwo, setResultThree]);

  const spinSlot = () => {
    setSpin(!spin);
    setButtonCount(buttonCount - 1)
  };

  useEffect(() => {
    let interval;

    if (spin) {
      interval = setInterval(() => {
        // 각 슬롯에 대한 새로운 결과 생성
        const newResult = result.map(() => symbols[Math.floor(Math.random() * symbols.length)]);
        const newResultOne = resultOne.map(() => symbolsOne[Math.floor(Math.random() * symbolsOne.length)]);
        const newResultTwo = resultTwo.map(() => symbolsTwo[Math.floor(Math.random() * symbolsTwo.length)]);
        const newResultThree = resultThree.map(() => symbolsThree[Math.floor(Math.random() * symbolsThree.length)]);

        // 각 슬롯에 대한 결과 업데이트
        setResult(newResult);
        setResultOne(newResultOne);
        setResultTwo(newResultTwo);
        setResultThree(newResultThree);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [spin, result, resultOne, resultTwo, resultThree, symbols, symbolsOne, symbolsTwo, symbolsThree]);

  return (
    <div>
      <div>
        {/* 각각의 슬롯에 대한 결과 표시 */}
        <p style={{ fontSize: '24px', marginBottom: '10px' }}>
          {result[0]}
        </p>
        <p style={{ fontSize: '24px', marginBottom: '10px' }}>
          {resultOne[0]}
        </p>
        <p style={{ fontSize: '24px', marginBottom: '10px' }}>
          {resultTwo[0]}
        </p>
        <p style={{ fontSize: '24px', marginBottom: '10px' }}>
          {resultThree[0]}
        </p>
      </div>
      {buttonCount !== 0 ? (
        <Button onClick={spinSlot}>{spin ? '멈춰!' : '돌리기!'}</Button>)
        : (
          <div>
            <Button onClick={() => { router.push('/Drink') }}>벌주만들러 가기</Button>
            <Button onClick={() => { props.onClick() }}>흑기사!</Button>
          </div>
        )}
    </div>
  );
};

export default SlotMachineThree;
