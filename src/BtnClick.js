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
        <div>
            <button onClick={generateAlert}>Click me to generate a popup</button>
        </div>
    )
}

export default BtnClick