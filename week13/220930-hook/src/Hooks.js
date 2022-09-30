import {useState, useEffect} from 'react';

const Hook = () => {
    const [name, setName] = useState("");
    const [cnt, setCnt] = useState(0);

    const changeName = e => {
        setName(e.target.value);
    }
    const changeCnt = () => {
        setCnt(cnt + 1);
    }
    // useEffect(() => {
    //     console.log("useEffect");
    //     console.log("name : ", name);
    
    // }, [name]);

    // useEffect(실행될(함수), [update])
    
    useEffect(() => {
        console.log("name1 : ", name);
        return()=>{
            console.log("name2 : ", name);
        }
    }, [name]);
    
    return(
        <div>
            <div>
                <input value={name} onchange={changeName}/>
                <button onClick={changeCnt}>+1</button>
            </div>
            <h3>이름: {name}</h3>
            <h4>횟수: {cnt}</h4>
        </div>
    )
       
    
}

export default Hook;