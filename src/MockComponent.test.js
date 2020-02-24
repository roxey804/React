import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import "jest-dom/extend-expect";
import MockComponent from './MockComponent';

afterEach(cleanup);

it("my test name", () => {
    const { getByTestId, getByText } = render(
        <MockComponent />
    );
    expect(getByTestId("ptag")).toHaveTextContent("Super");
    expect(getByText("Super")).toHaveClass("testclass");
}); 