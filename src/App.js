import React from 'react';
import './App.css';
import './bootstrap.min.css';
import Greet from './BtnClick';

class Myclass extends React.Component {
  render() {
    return (
      <Greet name="bob" />
    );
  }
}
// see https://www.youtube.com/watch?v=m7OWXtbiXX8 

export default Myclass;

