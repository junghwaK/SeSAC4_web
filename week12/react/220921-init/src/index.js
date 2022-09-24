import React from 'react';
import ReactDOM from 'react-dom/client';
// import MyComponent from './MyComponent';
// import './index.css';
// import Test from './test';
// import Test2 from './test2';
// import ClassComponent from './ClassComponent';
// import App from './App';
// import props from './MyComponent';
import ConsoleComponent from './ConsoleComponent';


// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ConsoleComponent valid="콘솔 띄우기 성공!" />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
