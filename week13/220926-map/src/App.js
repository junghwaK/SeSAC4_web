import React,{useState} from 'react';
// import './App.css';

function App() {
    //useState는 함수기때문에 인자로()괄호안에 넣어준다. 
const [list, setList] = useState(['test', 'testing', 'apple', 'sesac', 'animal']);
function filterChexk(){
  let lists = ['test', 'testing', 'apple', 'sesac', 'animal'];
  
  let newList = [];
  //4글자 이상인애들 걸러주라
  for (let i = 0; i< lists.length; i++){
    if( lists[i].length>4) newList.push(list[i]);
  }

  let result = lists.filter((value) => {
    //value.length > 4 이조건에 충족하는 요소만 리턴을 해주는것이다. 
    return value.length > 4;
  })
}

function addElement() {
  list.push('s');
  setList(list);
}

  return (
    <div>
      <ul>
        {list.map((name, i) => {
          return <li key={i}>{name}</li>
        })}
      </ul>
      <ul>
        {list.filter((name) => {
          return name.includes("a");
        })}
      </ul>
      <button onClick={addElement}>추가</button>
    </div>
  );
}

export default App;
