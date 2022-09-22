import React, {Component} from "react";
import img from "./456.jpg"
//props_컴포넌트의 propsTypes지정하는법
import PropTypes from "prop-types";


//만일 위에 prop-types를 임포트했다면 name 값은 무조건 문자열sting형태로 전달한다
// const MyComponent = ({name, children}) => {
//     return(
//         <div>
//             hi {name} <br></br>
//             children is {children}
//         </div>
//     );
// };

// let background ={
//     width:"500px",
//     height:"700px",
//     backgroundColor:"green",
//     position
// }

class MyComponent extends Component {
    static propTypes = {
        author: PropTypes.string,
        price: PropTypes.string,
        part: PropTypes.string 
    };
   
    render() {
        const {author, price, part} = this.props;

        return(
        <div style={{backgroundColor:"blue", height:"700px"}}>
           
           <p style={{color: "orange",textAlign: "center", fontSize: "35px", fontWeight:"bold"}}>이번주 베스트 셀러</p>
           <img style={{display: "block", margin: "0px auto", width:"170px", height:"200px"}} src={img}></img>
           <div style={{textAlign:"left",width:"50%", margin: "auto"}}>
           <p style={{fontSize: "28px", fontWeight:"bold"}}>나의 하루는 4시 40분에 시작된다</p>
           
            <h3>저자: {author}</h3> 
            <h3>판매가: {price}</h3> 
            <h3>구분: {part}</h3>
       
           </div>
        </div>
        );
    }
    
}


//props!!
// function ClassComponent(props){
//     return(
//         <div>
//             {props.children}
//             <h2>ClassComponent - function</h2>
//             <h5>name : {props.name}</h5>
//             <h5>location : {props.location}</h5>
//         </div>
//     )
// }


MyComponent.defaultProps = {
    food: "기본값"
}

MyComponent.propTypes = {
    food: PropTypes.string
}

export default MyComponent;