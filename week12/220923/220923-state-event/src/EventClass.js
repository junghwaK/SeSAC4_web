import React, {Component} from "react";

class EventClass extends Component{

    constructor(props){
        super(props);

        this.printConsole = this.printConsole.bind(this);
    }

    printConsole(){
        console.log("printConsole");
        console.log(this);
    }
    printConsole2 =() => {
        console.log("printConsole2");
        console.log(this);
    }
    render(){
        return(
            <div>   
                <button onClick={() => {this.printConsole('2')}}>printConsole</button>
                <button onClick={this.printConsole2}>printConsole2</button>
            </div>
        )
    }
}

export default EventClass;