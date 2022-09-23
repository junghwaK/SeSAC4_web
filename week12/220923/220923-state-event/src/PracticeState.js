// import { Component } from "react";
import React, { useState } from "react";


function PracticeState () {
    //useState()괄호안에 ""면 문자처리니까 0을 넣어야..
    const [cnt, setCnt] = useState(0);



    function Increase(){
        setCnt(cnt+1)
    }

    function Decrease(){
        setCnt(cnt-2)
    }

    return (
        <div>
            StatePractice
            <p>{cnt}</p>
            <button onClick={Increase}>+1</button>
            <button onClick={Decrease}>-2</button>
        </div>
    )
}


// class PracticeState extends Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             cnt:0
//         };
//     }
//     render(){
//         return(
//             <div>
//                 <div>{this.state.name}StateClass{this.state.cnt}</div>
//                 <button onClick={()=> {
//                     this.setState({cnt: this.state.cnt+2});                
//                     }}>+2</button>
//                 <button onClick={()=> {
//                     this.setState({cnt: this.state.cnt-1});                
//                     }}>-1</button>
//             </div>
//         )
//     }

// }
export default PracticeState;