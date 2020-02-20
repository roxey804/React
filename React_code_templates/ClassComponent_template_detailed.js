import React from 'react'
import './App.css';
import './bootstrap.min.css';

class MyClass extends React.Component {
    constructor(props) {
    super(props);

//define your state objects here
    this.state = {
        var1 : 'default value', //leave blank if no default
        var2 : ''
    };
    //bind the onChange handler function to the element
    this.handleChangeFunction = this.handleChangeFunction.bind(this);
}
//Define onChange/onSubmit etc functions here:
handleChangeFunction(event) {
    this.setState({value: event.target.var1});
}

render(){
    return (
        <div id="myID">
            <element value={this.state.var1} onChange={this.handleChangeFunction}>
                {/* note there is only 1 closing /> tag per JSX element!  */}
            </element>            
        </div>
    )
}
}
export default MyClass;