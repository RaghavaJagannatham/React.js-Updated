import React, { useEffect, useReducer } from 'react';
import axios from 'axios'
// import React from 'react'

const initialState = {
    loading: true,
    error: "",
    todos: [],
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return {
          loading: false,
          error: "",
          todos: action.payload,
        }
  
      case 'SET_ERROR':
        return {
          loading: false,
          error: "There are some errors",
          todos: [],
        }
  
  
      default:
        return state;
  
    }
  }
  

const ComponentA = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res => {
          console.log(res.data)
          dispatch({ type: 'SET_DATA', payload: res.data })
        })
        .catch(err => {
          dispatch({ type: 'SET_ERROR' })
        })
    }, [])
    const listmarkup = (
      <ul>
        {state.todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    )
    return (
      <div className="App">
        {state.loading ? 'Loading' : (state.error ? state.error : listmarkup)}
  
      </div>
    );    
}

export default ComponentA
