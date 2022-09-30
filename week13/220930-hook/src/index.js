import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';
// import Reducer from './HookReducer'
// import Memo from './HookMemo'


import Origin from './OriginSass'
import UseSass from './UseSass'


import CssModule from './CssModule'; 
import StyledComponent from './StyledComponent'; 
import PracticeSass from './PracticeSass';

import Animation from './Animation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Animation />
    <Origin />
    <hr />
    <UseSass />
  
    <CssModule />
    <StyledComponent />

    <hr />
    <PracticeSass />

    <hr />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
