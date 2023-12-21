import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

const SlotMachineFour = ({ symbols }) => {  
  const [spin, setSpin] = useState(false);
  const [result, setResult] = useState([]);
  const [buttonCount, setButtonCount] = useState(2);
  const router = useRouter()
  const { t } = useTranslation();

  // 컴포넌트가 마운트될 때 초기값을 '뭐가 나올지 궁금하지?'로 설정
  useEffect(() => {
    const initialResult = Array.from({ length: symbols.length }, () => t('slot1'));
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
      <div className='slotTxtTwo'>
        <p style={{ fontSize: '24px', marginBottom: '10px' }}>
          {result[0]}
        </p>
      </div>
      {buttonCount !== 0 ? (
        <Button onClick={spinSlot}>{spin ? t('slot2') : t('slot3')}</Button>)
        : (
          <Button onClick={() => { router.push('/Drink') }}>{t('slot4')}</Button>
        )}
    </div>
  );
};

export default SlotMachineFour;


