import React from 'react'
import './App.css';
import './bootstrap.min.css';

class ChangeText extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Click me to change my text'
        }
    }
//define click handler funct ion
changeMessage = () => {
    this.setState({
        message:'you clicked this button'
    }) 
} 

render(){
    return (
        <div className="col-md">
            <button className="btn btn-warning" onClick={this.changeMessage}>{this.state.message}</button>
        </div>
    )
}

}

export default ChangeText;