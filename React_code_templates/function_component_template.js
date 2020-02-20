import React from 'react';
import './App.css';
import './bootstrap.min.css';


function MyComponent() {

    //functions or arrow functions here 
    
     return (
        <div>
            <h1>My first React app</h1>
        </div>
    ) 
}

export default MyComponent;

// or a more elegant way:

export default function AnotherComponent() {
   return (
    <div>
      <h2>Hi</h2></div>
  )
}