import { useState, useEffect } from 'react';

const SlotMachineFour = ({ symbols }) => {
    const [spin, setSpin] = useState(false);
    const [result, setResult] = useState([]);
    const [buttonCount, setButtonCount] = useState(2);

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
            <div>
                {result.map((symbol, index) => (
                    <p key={index} style={{ fontSize: '24px', marginBottom: '10px' }}>
                        {symbol}
                    </p>
                ))}
            </div>
            {buttonCount !== 0 ? (
                <button onClick={spinSlot}>{spin ? '멈춰!' : '돌리기!'}</button>)
                : (
                    <button onClick={() => { router.push('/') }}>다른버튼!</button>
                )}
        </div>
    );
};

export default SlotMachineFour;


