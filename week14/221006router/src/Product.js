import { useParams, useLocation, useSearchParams, useNavigate } from 'react-router-dom';

function Product() {
    const {id} = useParams();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    return(
        <div style={{backgroundColor:"beige"}}>
            {/* <h1>{id}번 Product</h1> */}
            <p>학생의 이름은 <span style={{color:"green"}}>{id}</span>입니다.
            {searchParams !=0 ? (<p>실제이름은 <span style={{color:"red"}}><b>{searchParams.get('search')}</b></span></p>) : <p></p>} </p>

            {/* <ul>
                <li>hash : {location.hash}</li> 
                <li>pathname : {location.pathname}</li> 
                <li>search : {location.search}</li> 
                <li>state : {location.state}</li> 
                <li>key : {location.key}</li> 
            </ul>

            <ul>
                <li>keyWords : {searchParams}</li> 
                <li>keyWord : {searchParams.get("search")}</li> 
            </ul> */}

            <ul>
                {/* <li>
                    <button onClick={() => navigate(-2)}>Go 2 pages back</button>
                </li> */}
                
                    <button onClick={() => navigate(-1)}>이전 페이지로</button>
           
                {/* <li>
                    <button onClick={() => navigate(1)}>Go foward</button>
                </li>
                <li>
                    <button onClick={() => navigate(2)}>Go 2 pages foward</button>
                </li>
                <li>
                    <button onClick={() => navigate('/')}>Go Root</button>
                </li>
                <li>
                    <button onClick={() => navigate('/', {state: 'a'})}>Go Root2</button>
                </li> */}
            </ul>
        </div>
    );
};

export default Product;