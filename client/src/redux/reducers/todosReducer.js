import * as actioTypes from '../actions/type';

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case actioTypes.ADD_NEW_TODO:
      return [action.payload, ...state]
    default:
      return state;
  }
}

export default todosReducer;