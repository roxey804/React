import React from 'react';
import './App.css';
import './bootstrap.min.css';
import london from './images/london.jpg';

//now defining the components
function Hero() {
    return(<div className="row">
        <div className="jumbotron col-10 offset-1">
            <h1 className="text-center">Country game</h1>
        </div>
    </div>);
}

function Country() {
    return(
        <div className="col">
        <div className="card offset-1" style={{ width: "18rem", backgroundColor:"blue"}}>
<img className="card-img-top" src={london} alt="country"></img>
        </div>
        </div>
    );
}

function Options({cities}) {
    return(
        <div className="container">
            <div className="row">
            <div className="col">
        <ul className="list-group">
        <li className="list-group-item ">{cities.name}
        </li>
        <li className="list-group-item">{cities.name}</li>
      </ul>
      </div>
      </div>
      </div>
    );
}


function CountryQuiz ({cityData}) {
        return (
            <div className="container-fluid">
                <Hero/> 
                <Country />
                <Options {...cityData}/>
                {/* <h1>text outside hero</h1> */}
            </div>
        );
    }

export default CountryQuiz;