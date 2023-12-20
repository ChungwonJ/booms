import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';

const SlotMachineFour = ({ symbols }) => {
  const [spin, setSpin] = useState(false);
  const [result, setResult] = useState([]);
  const [buttonCount, setButtonCount] = useState(2);
  const router = useRouter()

  // 컴포넌트가 마운트될 때 초기값을 '뭐가 나올지 궁금하지?'로 설정
  useEffect(() => {
    const initialResult = Array.from({ length: symbols.length }, () => '뭐가 나올지 궁금하지?');
    setResult(initialResult);
  }, [symbols]);

  const spinSlot = () => {
    setSpin(!spin);
    setButtonCount(buttonCount - 1)
  };

  useEffect(() => {
    let interval;

    if (spin) {
      interval = setInterval(() => {
        const newResult = result.map(() => symbols[Math.floor(Math.random() * symbols.length)]);
        setResult(newResult);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [spin, result, symbols]);

  return (
    <div>
      <div className='slotTxt'>
        <p style={{ fontSize: '24px', marginBottom: '10px' }}>
          {result[0]}
        </p>
      </div>
      {buttonCount !== 0 ? (
        <Button onClick={spinSlot}>{spin ? '멈춰!' : '돌리기!'}</Button>)
        : (
          <Button onClick={() => { router.push('/Drink') }}>벌주설정하기</Button>
        )}
    </div>
  );
};

export default SlotMachineFour;


