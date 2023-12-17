import { useState } from 'react'
import { BUTTON_STYLE } from '../Reducer'

export default function Todo({ todo, name, handleToggle, handleDelete, handleAddComment, handleEdit }) {

  return (
    <div className='border border-gray-600'>
      <span className={`${todo.complete ? 'text-amber-400' : 'text-white'} text-xl m-2 p-2`}>
        {todo.name}
      </span>
      {todo.comment && (
        <span className='text-gray-400 text-lg m-2 p-2'>&#8220;{todo.comment}&#8221;</span>
      )}
      <button onClick={() => handleToggle(todo.id)} className={BUTTON_STYLE}>
        {`${todo.complete ? 'Undone' : 'Done'}`}
      </button>
      <button onClick={() => handleAddComment(todo.id, name)} className={BUTTON_STYLE}>
        Comment
      </button>
      <button onClick={() => handleEdit(todo.id, name)} className={BUTTON_STYLE}>
        Edit
      </button>
      <button onClick={() => handleDelete(todo.id)} className={BUTTON_STYLE}>
        Delete
      </button>
    </div>
  );
}
