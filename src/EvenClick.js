import React from 'react'
import './App.css';
import './bootstrap.min.css';
//click counter
//This function counts the number of times a div has been clicked, updating the result on the webpage and in console.log

class EvenCounter extends React.Component{
    constructor(props) {
        super(props);
        //initial state is 0 clicks
        this.state = {clicks: 0};
        this.clickHandler = this.clickHandler.bind(this);
    }
    //functions here
    clickHandler(event) {
         //add 1 each time user clicks
        const clicksNew = this.state.clicks +1;
        //update the state
        this.setState({clicks: clicksNew});
        //add logic: if even no. do action as defined by onEvenClick arrow fncn in App.js (CountryQuiz.js)
        if (clicksNew %2 ===0) {
            this.props.onEvenClick(clicksNew);
        }
    }
    render(){
        return <div><button className="btn btn-info" onClick={this.clickHandler}>Click me</button>
        <p> This button has been clicked {this.state.clicks} times</p>
        </div>;
    }

}

export default EvenCounter;