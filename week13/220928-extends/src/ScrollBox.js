import React, {Component, createRef} from 'react';




class ScrollBox extends Component {

    //id를 사용했을때!
    getHeight(){
        let div = document.getElementById('div1');
        div.scrollTop = div.scrollHeight;
    }
    
    moveBottom = () => {
        this.juby1.scrollTop = this.juby1.scrollHeight;
    }
    
    juby2 = React.createRef();
    moveTop = () => {
        this.juby2.current.scrollTop = this.juby2.current.scrollHeight;
    }


    render(){ 
        return(<>
            <div>
                {/* id */}
                <div id='div1' style={{width:"200px", height: "200px", overflowY: "scroll", scrollBehavior: "smooth"}}> 
                    <div id='div2' style={{width:"100%",height:"1000px",backgroundColor:"pink"}}>

                    </div>
                </div>

                <button onClick={this.getHeight}>맨밑으로(id)</button>

                {/* ref */}
                <div ref={ (ref) => {this.juby1 = ref }} style={{width:"200px", height: "200px", overflowY: "scroll",scrollBehavior: "smooth"}}> 
                    <div style={{width:"100%",height:"1000px",backgroundColor:"pink"}}>

                    </div>
                </div>

                <button onClick={this.moveBottom}>맨밑으로(ref)</button>

                {/* createRef */}
                <div ref={this.juby2} style={{width:"200px", height: "200px", overflowY: "scroll",scrollBehavior: "smooth"}}> 
                    <div style={{width:"100%",height:"1000px",backgroundColor:"pink"}}>

                    </div>
                </div>

                <button onClick={this.moveTop}>맨밑으로(createRef)</button>
            </div>
        </>
        );
    }
}

export default ScrollBox;
