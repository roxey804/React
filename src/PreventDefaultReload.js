import React from 'react'
import './App.css';
import './bootstrap.min.css';


       
class PreventDefaultReload extends React.Component {
    constructor(props) {
        super(props);
         //this will be the default message visible , blank if left empty
        this.state = { content: "try typing reload"};
        this.onChangeField = this.onChangeField.bind(this);
        this.onSubmitField = this.onSubmitField.bind(this);
    }

    onChangeField(event) {
        this.setState({content: event.target.value});
    }
    onSubmitField(event) {
        if (this.state.content === "reload") {
            alert('you typed: '+ this.state.content+' page will now be reloaded! ');
                }
        else { event.preventDefault();}
    }
    //if content of the textbbox is NOT reload, 
    // if user does not input reload, prevent default will stop the default action of reload of the browser

    render() {
        return (
            <form onSubmit={this.onSubmitField}>
            <input type="text" value={this.state.content} onChange={this.onChangeField} />
            <input className="btn btn-success" type="submit" value="Submit" />
            </form>
        )
    }
}

        
export default PreventDefaultReload;