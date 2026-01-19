import React, { useState, useRef, useEffect } from 'react';

function TodoList({todos, setTodos}) {
  return (
    <ol className="flex flex-col items-center gap-[27px] mt-[27px] mb-[27px] w-[97%] max-w-[455px]">
      {todos && todos.length > 0 ? (
        todos?.map((item, index) => (
          <TodoItem key={index} item={item} todos={todos} setTodos={setTodos} />
        ))
      ) : (
        <p className="text-white text-center">No tasks available</p>
      )}
    </ol>
  );
}

function TodoItem({item, setTodos}) {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);

  const completeTodo = () => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === item.id ? { ...todo, is_completed: !todo.is_completed } : todo
      )
    );

    // Update localStorage after marking todo as completed
    const updatedTodos = JSON.stringify(todos);
    localStorage.setItem("todos", updatedTodos);
  }
  

  const handleEdit = () => {
    setEditing(true);
  }

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();

      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [editing]);

  const handleInputSubmit = (event) => {
    event.preventDefault();

    // Update localStorage after editing todo title
    const updatedTodos = JSON.stringify(todos);
    localStorage.setItem('todos', updatedTodos);
    setEditing(false);
  }

  const handleInputBlur = () => {
    // Update localStorage after editing todo title
    const updatedTodos = JSON.stringify(todos);
    localStorage.setItem('todos', updatedTodos);

    setEditing(false);
  }

  const handleInputChange = (event) => {
      const newTitle = event.target.value;
      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo.id === item.id ? { ...todo, title: newTitle } : todo
        )
      );
  }

  const handleDelete = () => {
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== item.id));

      // Update localStorage after deleting todo
    const updatedTodos = JSON.stringify(
      todos.filter(todo => todo.id !== item.id)
    );

    localStorage.setItem('todos', updatedTodos);
  }

  return (
    <li id="{item?.id}" className="bg-[#1f2937] text-white w-full max-w-[455px] text-base h-[70px] p-3 flex items-center justify-between border border-[#c2b39a] rounded-lg">
      {
        editing ? (
          <form onSubmit={handleInputSubmit} className="w-full">
            <label htmlFor="edit-todo">
              <input
                ref={inputRef}
                type="text"
                name="edit-todo"
                id="edit-todo"
                defaultValue={item?.title}
                onBlur={handleInputBlur}
                onChange={handleInputChange}
                className="w-full bg-transparent border-none text-white focus:outline-none"
              />
            </label>
          </form>
        ) : (
          <> 
            <button onClick={completeTodo} className="flex items-center gap-3 text-base border-none text-white bg-transparent hover:opacity-80 transition-opacity">
              <svg className="w-5 h-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="8" strokeWidth="2" fill={item.is_completed ? "#22C55E" : "#0d0d0d"} stroke="currentColor" />
              </svg>
              <span style={item.is_completed ? {textDecoration : "line-through"} : {}}>{item?.title}</span>
            </button>
            <div className="flex items-center gap-1">
              <button onClick={handleEdit} className="bg-transparent border-none text-white hover:text-[#88ab33] transition-colors">
                <span className="visually-hidden">Edit</span>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </button>
              <button onClick={handleDelete} className="bg-transparent border-none text-white hover:text-red-400 transition-colors">
                <span className="visually-hidden">Delete</span>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
              </button>
            </div>
          </>
        )
      } 
    </li>
  );
}

export default TodoList;
