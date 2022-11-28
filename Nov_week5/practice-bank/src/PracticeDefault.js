import {useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';

function PracticeDefault() {
    const money = useSelector((state) => state.money);
    return (
        <div style={{textAlign: 'center'}}>
            <h1>코딩온 은행</h1>
            <h3>잔액 : {money}원</h3>
            <Button />
        </div>
    );
}

const Button = () => {

    const input = useRef();
    const dispatch = useDispatch();

    function deposit() {
        dispatch({type: "DEPOSIT", amount: input.current.value});
    }

    function withdraw() {
        dispatch({type: "WITHDRAW", amount: input.current.value});
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <input type="text" ref={input} />
            <button onClick={deposit}>입금</button>
            <button onClick={withdraw}>출금</button>
        </div>
    )
}

export default PracticeDefault;