import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Myclass from './App';
import AuthorQuiz from './AuthorQuiz'; 
import * as serviceWorker from './serviceWorker';

const citynames = [
    {
        name: ['london','paris']
    }
];

const state = {
    cityData: {
    cities: citynames[0],
}
};

ReactDOM.render( 
//<Myclass />,
<AuthorQuiz {...state} />,

document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
