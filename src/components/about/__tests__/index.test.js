import React from 'react';
//render will "render" the component, cleanup function is used 
// to remove components from the DOM to prevent memory leaking, as 
// well as variable or data collisions between tests that could 
// corrupt test results. 
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';




// call the cleanup function using the afterEach global function from Jest:
afterEach(cleanup);

// use the describe function to declare the component we're testing, by adding the following code:
describe('About component', () => {
    // First Test
    it('renders', () => {
        render(<About />);
    });
    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render About
    })
})
const { asFragment } = render(<About />);
expect(asFragment()).toMatchSnapshot();