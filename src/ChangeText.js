import React from 'react'

class ChangeText extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Click me!'
        }
    }
//define click handler function
changeMessage = () => {
    this.setState({
        message:'you clicked this button'
    }) 
} 

render(){
    return (
        <div>
            <button onClick={this.changeMessage}>{this.state.message}</button>
        </div>
    )
}

}

export default ChangeText;