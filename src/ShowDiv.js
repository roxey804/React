import React from 'react'
import './App.css';
import './bootstrap.min.css';


function ShowDiv() {
    function showDiv() {
    
  const e = document.getElementById("mydiv");
  e.classList.remove("hidden")
} 
    return (
        <div>
            <button onClick={showDiv}>Click me to show hidden text</button>
            <div id="mydiv" className="hidden">Hidden text now displayed!</div>
        </div>
    )
}

export default ShowDiv;