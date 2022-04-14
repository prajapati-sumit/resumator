import React from 'react';
import { render } from '@testing-library/react'; /*to provide utility functions on top of react-dom 
                                                            and react-don/test-utlis*/
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
 /*The test code above used React Testing Library's render method to
  virtually render the App component imported from App.js file and append it to the document.body node. 
 You can access the rendered HTML through the screen object.*/