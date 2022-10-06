import { Link, useLocation } from 'react-router-dom';


function Main() {
    //useLocation을 연결하기 위한 코드 
    const location = useLocation();
    return(
        <div style={{backgroundColor:"beige", display:"flex"}}>
            <Link to='/'><h1>ReactRouter 실습</h1></Link>
            {/* <h1>Main state = {location.state}</h1> */}
            <nav>
                <ul style={{display: "flex", listStyle:"none", fontSize:"20px"}}>
                   <li style={{marginRight: "15px"}}><Link to='/product/SeSAC'>학생 SeSAC</Link> </li>
                   <li style={{marginRight: "15px"}}><Link to='/product/codingon'>codingon</Link></li>
                   <li><Link to="/product/new?search=sesac&q=demo#test">searchParams</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Main;