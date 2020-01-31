import React from 'react';
import './App.css';
import './bootstrap.min.css';
import Header from './Header';
import BtnClick from './BtnClick';
import ChangeText from './ChangeText';
import ShowDiv from './ShowDiv';
import MyForm from './MyForm';
import PreventDefaultReload from './PreventDefaultReload';
import DropdownOnSelect from './DropdownOnSelect';
import EvenCounter from './EvenClick';
import ColourChange from './ColourChange';


function App() {
  return (
    <div className="App container ">
    <Header />
    <div className="row">
    <BtnClick />
    <ChangeText />
    <ShowDiv />
    <ColourChange />
    </div>
    <MyForm />
    <PreventDefaultReload />
    <EvenCounter onEvenClick={(data)=> {console.log(`even ${data}`);}}/>
    <DropdownOnSelect />
    
    </div>
  );
}

// see https://www.youtube.com/watch?v=m7OWXtbiXX8 

export default App;

