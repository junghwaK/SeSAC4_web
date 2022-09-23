import React, {Component} from "react";

class PracticeEvent extends Component{

    state = {
        message:"Hello World!"
    }

    start = () => {
        this.setState({
            message:"Goodbye World!"
        })
    }
    
    render(){
        return(
            <div>   
                <p>{this.state.message}</p>
                <button onClick={this.start}>클릭</button>
            </div>
        )
    }
}

export default PracticeEvent;