import axios from 'axios';
import { ADD_NEW_TODO } from './type';

const API_URL = 'http://localhost:3001';

export const addNewToDo = (data) => async (dispatch) => {
  try {
    const resp = await axios.post(`${API_URL}/todos`, { data })
    dispatch({
      type: ADD_NEW_TODO,
      data: resp.data
    })
  } catch (error) {
    console.log("Error while calling New To Do api", error.message);
  }
}