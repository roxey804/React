import React from 'react'

//Props
these get passed to the component (like fnc parameters)
immutable (cannot be changed)

//State
Managed within the component (like a variable)
mutable (CAN be changed)
Class components - this.State
Function components - useState 

class MyComponent extends React Component {

	constructor() {
		super()
		this.state = {
			poperty: 'xxx'
			name: 'Penn'

		}
	}
	changeName() {
		this.setState({
			name: 'Teller'
		})
	}

	render(){
		return(
			<div>
			<h1>Welcome {this.props.name}</h1>
			//change state by button click
			<button onClick={() => this.changeName()}>Magic button</button>
			</div>
			)
	}
}
export default MyComponent 