/* eslint-disable max-len */
import React, { useReducer } from 'react';
import { initState, colorRedux } from '../../redux/colorRedux';

const App = () => {
  const [state, dispatch] = useReducer(colorRedux, initState);
  const { current } = state;

  return (
    <>
      <button
        data-testid="undo"
        onClick={() => 
          dispatch({ type: 'undo' })
        }>undo</button>

      <button
        data-testid="redo"
        onClick={() => 
          dispatch({ type: 'redo' })
        }>redo</button>

      <label htmlFor="colorInput">color input</label>
      <input id="colorInput" 
        type="color" 
        value={current} 
        onChange={({ target }) => 
          dispatch({ type: 'record', payload: target.value })} />

      <div data-testid="colorDiv" 
        style={{ backgroundColor: current, width: '10rem', height: '10rem' }}>
      </div>
    </>
  );
};

export default App;
