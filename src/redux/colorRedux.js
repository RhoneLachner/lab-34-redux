export const initState = {
  before: [],
  current: '#FF0000',
  after: []
};
  
export const colorRedux = (state, action) => {
  switch(action.type) {
    case 'undo':
      return {
        after: [state.current, ...state.after],
        current: state.before[state.before.length - 1],
        before: state.before.slice(0, -1)
      };
    case 'redo':
      return {
        before: [...state.before, state.current],
        current: state.after[0],
        after: state.after.slice(1)
      };    
    case 'record':
      return {
        ...state,
        before: [...state.before, state.current],
        current: action.payload
      };
    default: return state;
  } 
};
