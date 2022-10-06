import { Link, useLocation } from 'react-router-dom';

function Main() {
    //useLocation을 연결하기 위한 코드 
    const location = useLocation();
    return(
        <div>
            <h1>Main state = {location.state}</h1>
            <Link to='/product/1'>1번 상품</Link>
            <br />
            <Link to='/product/2'>2번 상품</Link>
            <br />
            <Link to="/product/1?search=productName&q=demo#test">a번 상품</Link>
        </div>
    );
};

export default Main;