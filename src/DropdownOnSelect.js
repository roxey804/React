import React from 'react'
//import mango from './images/mango.png';
import pineapple from './images/pineapple.png';

class DropdownOnSelect extends React.Component {
    constructor(props) {
    super(props)

    //state defined here
    this.state = {
        // value: 'enter port description here',
        selectValue: 'Pineapple',
        fontColor: 'gold',
        response: 'Pina colada',
    };
    // this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
}
//functions here

// handleTextareaChange(event) {
//     this.setState({value: event.target.value});
// }
handleDropdownChange(event) {
    this.setState({selectValue: event.target.value});
    this.setState({name: event.target.name});
    let fruitChoice = event.target.value;
    let selectChoice = event.target.name;
    if (event.target.value === "mango") {
        // alert('mango chosen!');
        this.setState({ fontColor: 'orange',
                        response: 'mango lassi'});
    }
    else {
        this.setState({ fontColor: 'gold',
                         response: 'pina colada'});
    }
    //printing out the value of the chosen fruit option in the console
    console.log('changed to '+ fruitChoice + selectChoice);
}
render(){
   const myStyle = {
       textColor: {
       color: this.state.fontColor,
   }
};
const { textColor } = myStyle;

    return (
        <div>
        <select name="select1" value={this.state.selectValue} onChange={this.handleDropdownChange}>
        <option value="pineapple">Pineapple</option>
        <option value="mango">Mango</option>
      </select>
      <p style={textColor}>You want a {this.state.response}</p>
      <select name="select2" value={this.state.selectValue} onChange={this.handleDropdownChange}>
        <option value="pineapple">Pineapple</option>
        <option value="mango">Mango</option>
      </select>
      <p style={textColor}>You want a {this.state.response}</p>
      <img src={pineapple} alt="a fruit" style={{ maxWidth: '10%'}}></img>
      {/* <textarea value={this.state.value} onChange={this.handleTextareaChange}/> */}
    </div>
    );
}
}

export default DropdownOnSelect;