//import dependencies
import React from 'react';

//import react-testing methods
import { render, fireEvent } from 'react-testing-library';

//import jest matchers from jest-dom


//import your React component
import MyComponent from "./MyComponent";


//You can use test or it to define your React test
test('My test name', async () => {

    const {args that you use in your tests} = render(
    
    );
    
    await atestfunction(arguments, true);
    });
 //---------------------------------------------------//

test('Check i can do x', async () => {
    const {getByText, getByField} = render(
        <MyComponent>
            <App />
        </MyComponent>
    );
});

 //------------------Printing HTML in console--------------------//
test('Check i can do x', async () => {
    const { debug } = render(
        <MyComponent>
            <App />
        </MyComponent>
    );

   debug(); 
});
 //------------------Selecting Elements (getBylement.....) for popup or new text displayed--------------------//
 test('Check i can do x', async () => {
    const { getByPlaceholderText, getByTestId } = render(
        <MyComponent>
            <App />
        </MyComponent>
    );

   const myvar = getByPlaceholderText('text of placeholder element');
   const submitButton = getByTestId('submit-button');
   //interact with element 1. click submit button, wait for DOM change and check that text pops up
   fireEvent.click(submitButton);

   await waitforDomChange();

   getByText('some text here');
});