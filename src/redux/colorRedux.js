export const ACTIONS = {
  RECORD: 'record',
  UNDO: 'undo',
  REDO: 'redo'
};
  
export const initState = {
  before: [],
  current: '#FF0000',
  after: []
};
  
export const colorRedux = (state, action) => {
  switch(action.type) {
    case ACTIONS.UNDO:
      return {
        after: [state.current, ...state.after],
        current: state.before[state.before.length - 1],
        before: state.before.slice(0, -1)
      };
    case ACTIONS.REDO:
      return {
        before: [...state.before, state.current],
        current: state.after[0],
        after: state.after.slive(1)
      };    
    case ACTIONS.RECORD:
      return {
        ...state,
        before: [...state.before, state.current],
        current: action.payload
      };
    default: return state;
  } 
};
