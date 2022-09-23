import React, {useState} from 'react';

function StateFunctoin(){
    const [msg, setMsg] = useState("");
    const [list, setList] = useState([]);
    

    function changeMsg(){
        setMsg("메시지")
        //setState({msg:"메시지"})
    }

    return(
        <div>
            <p>{msg}</p>
            stateFunction
            <button onclick={changeMsg}>클릭</button>
        </div>
        
    )
}
export default StateFunctoin;