import axios from 'axios';
import { ADD_NEW_TODO, TOGGLE_TODO, GET_ALL_TODO, UPDATE_TODO } from './type';

const API_URL = 'http://localhost:3001';

export const addNewToDo = (data) => async (dispatch) => {
  try {
    const resp = await axios.post(`${API_URL}/todos`, { data })
    dispatch({
      type: ADD_NEW_TODO,
      data: resp.data
    })
  } catch (error) {
    console.log("Error while calling New To Do API", error.message);
  }
}


export const getAllTodos = () => async (dispatch) => {
  try {
    const resp = await axios.get(`${API_URL}/todos`)
    dispatch({
      type: GET_ALL_TODO,
      data: resp.data
    })
  } catch (error) {
    console.log("Error while calling Get All Todos API", error.message);
  }
}


export const toggleTodo = (id) => async (dispatch) => {
  try {
    const resp = await axios.get(`${API_URL}/todos/${id}`)
    dispatch({
      type: TOGGLE_TODO,
      data: resp.data
    })
  } catch (error) {
    console.log("Error while calling Togge To Do API", error.message);
  }
}


export const updateTodo = (id, data) => async (dispatch) => {
  try {
    const resp = await axios.put(`${API_URL}/todos/${id}`, { data });
    dispatch({
      type: UPDATE_TODO,
      data: resp.data
    })
  } catch (error) {
    console.log("Error while calling Togge To Do API", error.message);
  }
}