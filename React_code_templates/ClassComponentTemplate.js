import React from 'react'
import './App.css';
import './bootstrap.min.css';

class MyClass extends React.Component {
    constructor(props) {
        super(props);
    
    //define state 
        this.state = {
        var1 : 'default',
    };
     //bind the onChange handler function to the element

}
//Functions/event handlers here

handleSomething(event) {
    this.setState({ value: event.target.var1});

}

render(){
    return(
        <div>

        </div>
    );
}
}

export default MyClass;