import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import App from './App';



describe('useRecord function', () => {
  it ('changes the background color', async() => {
    render(<App />);
    const colorInput = screen.getByLabelText('color input');
    fireEvent.change(colorInput, {
      target: {
        value: '#00FF00'
      }
    });
    const div = await screen.getByTestId('colorDiv');
    expect(div).toHaveStyle({
      backgroundColor: '#00FF00'
    });
 
  
  });
});




describe('App component snapshot', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
