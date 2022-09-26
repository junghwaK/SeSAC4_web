import React, {useState} from 'react';

// set names뭐하는애지..
const MapPractice = () => {
    const [names, setNames] = useState([
        {id: 1, text:"코디", Email:"codi@gmail.com"},
        {id: 2, text:"윤소희", Email:"yoonsohee@gamil.com"}

    ]);

    //변수이름, 상태를 바꾸는 함수이름.
    const [inputText, setInputText] = useState('');
    //email추가
    const [inputEmail,setInputEmail] = useState('');
    const [nextId, setNextId] = useState(3)

    const onChange = (e) => setInputText(e.target.value);
    const onChange2 = (e) => setInputEmail(e.target.value);
    const onClick = () =>{
        const nextNames = names.concat({
            id: nextId,
            text: inputText,
            Email: inputEmail
        });
        setNextId(nextId +1 );
        setNames(nextNames);
        setInputText('');
        setInputEmail('');
    }

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames)
    }

    const onKeyPress=(e)=>{
        if(e.key == 'Enter'){
            onClick();
        }
    }
    // const nameList = names.map(name => <p key={name.id}>{name.text} : {name.Email}</p>);
    const nameList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text} : {name.Email}</li>);
    return(
        <div>
            <input type='text' placeholder='이름' value={inputText} onChange={onChange}></input>
            <input type='text' placeholder='이메일' value={inputEmail} onChange={onChange2} onKeyPress={onKeyPress}></input>
            <button onClick={onClick} >등록</button>
            <h3>
                {nameList}
            </h3>
            
        </div>
    )
}

export default MapPractice;