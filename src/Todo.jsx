import React from 'react'
import { ACTIONS } from './Reducer'
import { BUTTON_STYLE } from './Reducer'
import { CheckCircle, Circle, Edit2, MessageCircle, Trash2 } from 'lucide-react'



export default function Todo({todo, name, dispatch}) {
  return (
    <div className='flex justify-between items-center max-w-[680px] w-full border border-gray-600'>
      <div>
        <span className={`${todo.complete ? "text-amber-400" : "text-white"} text-xl m-2 p-2`}>{todo.name}</span>
        {todo.comment && <span className="text-gray-400 text-lg m-2 p-2">&#8220;{todo.comment}&#8221;</span>}
      </div>
      <div>
        <button 
          onClick={()=>dispatch({type:ACTIONS.TOGGLE_TODO, payload: {id:todo.id}})} 
          className={BUTTON_STYLE}>{!todo.complete && <Circle/>}{todo.complete && <CheckCircle/>}
        </button>
        <button
          onClick={()=>dispatch({type:ACTIONS.ADD_COMMENT, payload: {id:todo.id, comment:name}})} 
          className={BUTTON_STYLE}><MessageCircle/>
        </button>
        <button
          onClick={()=>dispatch({type:ACTIONS.EDIT_TODO, payload: {id:todo.id, name:name}})} 
          className={BUTTON_STYLE}><Edit2/>
        </button>
        <button
          onClick={()=>dispatch({type:ACTIONS.DELETE_TODO, payload: {id:todo.id}})} 
          className={BUTTON_STYLE}><Trash2/>
        </button>
      </div>
    </div>
  )
}

