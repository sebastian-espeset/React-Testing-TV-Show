import React from 'react';
import { screen, render} from '@testing-library/react';
import Episodes from './Episodes';

test(("Episodes renders"),()=>{
   const { rerender }=render(<Episodes/>)
})