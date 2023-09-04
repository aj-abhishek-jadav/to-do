import * as actionTypes from '../actions/type';

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_NEW_TODO:
      return [action.data, ...state]
    case actionTypes.GET_ALL_TODO:
      console.log(action.data);
      return action.data
    case actionTypes.TOGGLE_TODO:
      return state.map(todo => (
        todo._id === action.data._id ? { ...todo, done: !todo.done } : todo
      ))
    case actionTypes.UPDATE_TODO:
      return state.map(todo => (
        todo._id === action.data._id ? { ...todo, data: action.data.data } : todo
      ))
      case actionTypes.DELETE_TODO:
        return state.filter(todo => todo._id !== action.data._id);
    default:
      return [];
  }
}

export default todosReducer;