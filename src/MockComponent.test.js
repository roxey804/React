import React from 'react';

import { render, cleanup, fireEvent } from 'react-testing-library';

import "jest-dom/extend-expect";

import MockComponent from './MockComponent';

afterEach(cleanup);

it("first test", () => {
    const { debug } = render(
        <MockComponent />
    );

    debug();
})