import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { fetchShow as mockFetchShow } from './api/fetchShow';

jest.mock('./api/fetchShow');

import App from './App';

test(("App renders without error"),()=>{
    render(<App/>)
});

// test(("renders data when drop down is clicked"),async()=>{
//     //Initial arrange

  

// });