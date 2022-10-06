import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import Main from "./Main";
import Product from "./Product";


// const PracticeRouter =() => {
//     return (
//         <div>
//             <BrowserRouter>
//             <Link to='/'>페이지</Link>
//             <Routes>
//                 <Route path='/' element={<Main />}></Route>
//                 <Route path='/product' element={<Product />}></Route>
//                 {/* 파라미터로 받을 땐 id 앞에 :를 붙여야한다.  */}
//                 <Route path='/product/:id' element={<Product />}></Route>
//             </Routes>
//             </BrowserRouter>
//         </div>
//     );
// };

const PracticeRouter =() => {
    return (
        <div>
            <BrowserRouter>
            {/* <Link to='/'><h1>ReactRouter 실습</h1></Link> */}
            <Routes>
                <Route path='/' element={<Main />}></Route>
                <Route path='/product' element={<Product />}></Route>
                {/* 파라미터로 받을 땐 id 앞에 :를 붙여야한다.  */}
                <Route path='/product/:id' element={<Product />}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    );
};

export default PracticeRouter;