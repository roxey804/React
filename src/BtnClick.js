import React from 'react'
import './App.css';
import './bootstrap.min.css';

function BtnClick() {
    function generateAlert () {
        console.log('clicked!')
        alert('clicked!')
    }
    // function changeText() {

    // }
    // function changeColor() {

    // }   
     return (
        
            <div className="col-md">
            <button className="btn btn-danger" onClick={generateAlert}>Click me to generate a popup</button>
        </div>
       
    )
}

export default BtnClick