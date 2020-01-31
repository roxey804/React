import React from 'react'
import './App.css';
import './bootstrap.min.css';


class MyForm extends React.Component {
    constructor(props) {
        super(props);

        //define your text input variables
        this.state = {
            firstName: '',
            lastName: '',
            btn: ''
        };
        //bind this to the method
this.onInput = this.onInput.bind(this);
    }
        //define on input method
        onInput(event){

            this.setState({
                [event.target.name]: event.target.value,
            });
           
        }


render(){
    return (
        <form>
            <input type="text" name="firstName" value={this.state.firstName} placeholder="first name" onChange={this.onInput}/>
            <input type="text" name="lastName" value={this.state.lastName} placeholder="Last name" onChange={this.onInput}/>
            <button>{this.btn}</button>
        </form>
    )
}

}

export default MyForm;