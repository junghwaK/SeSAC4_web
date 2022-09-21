import React, {Component} from 'react';
import PropTypes from "prop-types";

// let name = "junghwa";
// let my_style = {
//     background: "blue",
//     color:"orange",
//     fontSize: "40px",
//     padding:"12px"
// }

class test extends Component {

    render() {
        let name = "junghwa";
        let my_style = {
            background: "blue",
            color:"orange",
            fontSize: "40px",
            padding:"12px"
        }
        return(
            <div style={my_style}>{name}</div>
        );
    }
}

export default test;