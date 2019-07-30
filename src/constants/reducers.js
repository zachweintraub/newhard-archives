import initialState from './initialState';

const loadingReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'START_LOADING': {
      let newState = Object.assign({}, state);
      newState.isLoading = true;
      return newState;
    }
    case 'END_LOADING': {
      let newState = Object.assign({}, state);
      newState.isLoading = false;
      return newState;
    }
    default:
      return state;
  }
}

export const rootReducer = {
  isLoading: loadingReducer
}