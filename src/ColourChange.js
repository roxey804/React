import React, { useState } from 'react';

function ColourChange() {

     const [color, setColor ] =useState('red')

const changeColor = () => {
     setColor("green");
}
   
     return (
        <div>
             <button className="btn btn-light"  style={{color}} onClick={changeColor}>Click to change colour</button>
        </div>
    ) 
}

export default ColourChange;