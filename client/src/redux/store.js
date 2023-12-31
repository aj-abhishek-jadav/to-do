import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import todosReducer from './reducers/todosReducer';

const reducers = combineReducers({
  todos: todosReducer
})

const middleware = [thunk];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;