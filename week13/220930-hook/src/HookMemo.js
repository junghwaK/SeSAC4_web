import {useState, useMemo, useEffect, useCallback, useRef} from 'react';

function getAverage(list) {
    console.log("getAverage");
    let sum = 0;
    if (list.length == 0 ) return sum;
    for (let i = 0; i <list.length; i++){
        sum = sum + list[i];
    } 
    return sum / list.length;
}

const Memo = () => {
    const [list, setList] = useState([]);
    const [num, setNum] = useState(0);

    //뭔가 보낼수있다. 초기값도 보낼수있어. 기본으로 연결될 요소를 보내준다. 
    const input = useRef(null);

    // const onChange = e =>{
        // console.log("onChange");
        // setNum(e.target.value);
    // }

    // const onInsert = e => {
        // setList([...list, parseInt(num)]);
        // console.log(list);
        // setNum(0);
    // }


    // 이거 고쳐!
    // list상태값이 바뀌었을때 생성되도록해보기
    const onInsert = e => useCallback( e => {
        setList([...list, parseInt(num)]);
        setNum(0);
    }, []);

    // useCallback함수의 onchage내용임. 처음 렌더링 될때만 함수가 만들어질것이다. 
    const onChange = e => useCallback(e => {
        setNum(e.target.value);
    }, []);

    // const avg = useMemo(() => getAverage(list),[list]);
    const [avg, setAvg] = useState(0);
    useEffect(() => {
        setAvg(getAverage(list));
    }, [list]);

    return(
        <div>
           <input value={num} onChange={onChange} ref={input} />
           <button onClick={onInsert}>등록</button>
         
         <ul>
            {list.map((v,i) => {
                <li key={i}>{v}</li>
            })}
         </ul>
            <div>
                <b>평균값: {avg}</b>
            </div>
        </div>
    )
}

export default Memo;