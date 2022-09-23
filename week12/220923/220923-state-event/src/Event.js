import React, {Component, useState} from "react";

function Event(){
    function clickEvent(e){
        console.log(e);
    }
    function aClick(e){
        e.preventDefault();
        console.log("aClick");
        console.log(e);
    }
    return(
        <div>
            <a href="#" onClick={aClick}>a TAG</a>
            <button onClick={clickEvent}>Click!</button>
        </div>
    )
}
   
export default Event;