import Todo from "../model/Todo.js";

export const addTodo = async (request, response) => {
  try {
    const newTodo = await Todo.create({
      data: request.body.data,
      createdAt: Date.now()
    })

    await newTodo.save();
  
    response.status(200).json(newTodo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
}


export const getAllTodos = async (request, response) => {
  try {
    const todos = await Todo.find({}).sort({ 'createdAt': -1 })
    response.status(200).json(todos);
  } catch (error) {
    return response.status(500).json(error.message);
  }
}


export const toggleTodoDone = async (request, response) => {
  try {
    const todoId = request.params.id;
    const todoRef = await Todo.findById(todoId);
    const todo = await Todo.findOneAndUpdate(
      { _id: todoId },
      { done: !todoRef.done }
    )
    await todo.save();
    // const updatedTodo = await Todo.findById(todoId);
    response.status(200).json(await Todo.findById(todoId));
  } catch (error) {
    return response.status(500).json(error.message);
  }
}


export const updateTodo = async (request, response) => {
  try {
    const todoId = request.params.id;
    await Todo.findOneAndUpdate(
      { _id: todoId },
      { data: request.body.data }
    )
    response.status(200).json(await Todo.findById(todoId));
  } catch (error) {
    return response.status(500).json(error.message);
  }
}