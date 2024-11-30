import React, { useState } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { addTodo } from './configs/redux/reducers/todoSlice'

const App = () => {
  const [text, setText] = useState('1st todo')
  const dispatch = useDispatch()
  const todos = useSelector((state) => state);

  
  const handleAddTodo = () => {
    dispatch(addTodo(text))
    console.log(todos)
  }

  return (
    <button onClick={handleAddTodo}>Add Todo</button>
  )
}

export default App
