import React from 'react'
import { connect } from 'react-redux'

import * as actions from './../actions';


let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <input ref={node=>{
          input = node
        }}/> 
      <button onClick={(e)=>{ 
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(actions.addTodo(input.value))
          input.value = '';
        }}>
        Add todo
      </button>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo