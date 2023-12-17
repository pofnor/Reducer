import { useState } from "react"
import Todo from "./Todo"
import { BUTTON_STYLE } from '../Reducer'
import { Link } from "react-router-dom";

function App() {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");

  function newTodo(name) {
    return { id: Date.now(), name: name, complete: false };
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos((prevTodos) => [...prevTodos, newTodo(name)]);
    setName("");
  }

  function handleToggle(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  }

  function handleDelete(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function handleAddComment(id, comment) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, comment: comment } : todo
      )
    );
  }

  function handleEdit(id, updatedName) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, name: updatedName } : todo
      )
    );
  }

  return (
    <>
      <Link 
        className='flex mt-16 justify-center items-center text-gray-300 font-bold text-xl hover:text-amber-400'
        to='/'
      >
        Switch to Reducer Version
      </Link>      
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center mt-20 mb-4"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-80 h-12 px-4 -m-2 outline-none"
        />
        <button className={BUTTON_STYLE} onClick={handleSubmit}>
          ADD
        </button>
      </form>
      <div className="flex flex-col justify-center items-center gap-4">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
            handleAddComment={handleAddComment}
            handleEdit={handleEdit}
            name={name}
          />
        ))}
      </div>
    </>
  );
}

export default App;
