import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('useRecord function', () => {
  
  //RECORD COLOR TEST
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

  //UNDO BUTTON TEST
  it('Undo previous color', async() => {
    render(<App />);
    const colorInput = screen.getByLabelText('color input');
    const undo = screen.getByTestId('undo');
    fireEvent.change(colorInput, {
      target: {
        value: '#0000FF'
      }
    });
    fireEvent.click(undo);
    const div = await screen.findByTestId('colorDiv');
    expect(div).toHaveStyle({
      backgroundColor: '#FF0000'
    });
  });

  //REDO BUTTON TEST
  it('Redo to previous color', async() => {
    render(<App />);
    const colorInput = screen.getByLabelText('color input');
    const redo = screen.getByTestId('redo');
    const undo = screen.getByTestId('undo');
    fireEvent.change(colorInput, {
      target: {
        value: '#0000FF',
      }
    });
    fireEvent.click(undo);
    fireEvent.click(redo);
    const div = await screen.findByTestId('colorDiv');
    expect(div).toHaveStyle({
      backgroundColor: '#0000FF',
    });
  });
});

