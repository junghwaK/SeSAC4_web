import React, {Component} from "react";
// import img from "./456.jpg"
//props_컴포넌트의 propsTypes지정하는법
import PropTypes from "prop-types";


class ConsoleComponent extends Component {
    myfunc = (data) => {
        //함수를 정의 해주면 안되고,메시지등을 상속받아서 데려온다.
        //허위function을 만들어서() => 보내주는것이다.
        console.log(data);
    }

    render() {
        // const {text, valid} = this.props;

        return(
        <div>
            <h1>{this.props.text}</h1>
           <button onClick={ () =>{this.myfunc(this.props.valid)}}>콘솔메세지</button>
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


ConsoleComponent.defaultProps = {
    text: "이건 기본 text props입니다",
    valid: "이건 기본 text props입니다"
}

export default ConsoleComponent;