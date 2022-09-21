import React, {Component} from 'react';
import PropTypes from "prop-types";
import img from "./123.png"


let style = {
    color:"orange",
    fontSize: "40px",
    marginTop:"20px"
}

class test2 extends Component {
    render() {
        return(
            <div>
            <h2 style={style}>안녕하세요</h2>
            <img src={img}></img>
            </div>
        );
    }
}

export default test2