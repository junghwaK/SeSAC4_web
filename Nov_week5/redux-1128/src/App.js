import './App.css';
import { useState } from 'react';

import {createStore} from 'redux';
//store관리할때 모든 친구들의 최상위.
import {Provider} from 'react-redux';

function reducer(state, action){
  return {number: 1};
}

const store = createStore(reducer);
function App() {
  const [number, setNumber] = useState(0);
  return (
    <Provider store={store}>
    <div id="app">
      <h1>number : {number}</h1>
      <Box1 number={number} onIncrease={()=>{setNumber(number+1)}} onDecrease={()=>{setNumber(number-1)}}/>
    </div>
    </Provider>
  );
}

const Box1 = () =>{
  console.log('Box1');
  return (
    <div>
      <h2>Box1 컴포넌트 number : </h2>
      <Box2 />
    </div>
  )
}

const Box2 = () =>{
  console.log('Box2');
  return (
    <div>
      <h3>Box2 컴포넌트 number : </h3>
      <Box3 />
    </div>
  )
}
const Box3 = () =>{
  console.log('Box3');
  return (
    <div>
      <h4>Box3 컴포넌트 number : </h4>
      <input type="button" value="+" onClick={()=>{}} />
      <input type="button" value="-" onClick={()=>{}} />
    </div>
  )
}

export default App;
