import React from 'react'
import { ACTIONS } from './Reducer'
import { BUTTON_STYLE } from './Reducer'



export default function Todo({todo, name, dispatch}) {
  return (
    <div className='border border-gray-600'>
      <span className={`${todo.complete ? "text-amber-400" : "text-white"} text-xl m-2 p-2`}>{todo.name}</span>
      {todo.comment && <span className="text-gray-400 text-lg m-2 p-2">&#8220;{todo.comment}&#8221;</span>}
      <button 
        onClick={()=>dispatch({type:ACTIONS.TOGGLE_TODO, payload: {id:todo.id}})} 
        className={BUTTON_STYLE}>{`${todo.complete ? "Undone" : "Done"}`}
      </button>
      <button
        onClick={()=>dispatch({type:ACTIONS.ADD_COMMENT, payload: {id:todo.id, comment:name}})} 
        className={BUTTON_STYLE}>Comment
      </button>
      <button
        onClick={()=>dispatch({type:ACTIONS.EDIT_TODO, payload: {id:todo.id, name:name}})} 
        className={BUTTON_STYLE}>Edit
      </button>
      <button
        onClick={()=>dispatch({type:ACTIONS.DELETE_TODO, payload: {id:todo.id}})} 
        className={BUTTON_STYLE}>Delete
      </button>
    </div>
  )
}

