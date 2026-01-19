"use client";

function Form({todos, setTodos}) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const value = event.target.todo.value;
    const newTodo = {
      id: crypto.randomUUID(),
      title: value,
      is_completed: false
    };

    //Update todo state
    setTodos(prevTodos => [...prevTodos, newTodo]);
    // Store updated todo list in localStorage
    const updatedTodoList = JSON.stringify([...todos, newTodo]);
    localStorage.setItem('todos', updatedTodoList);
    event.target.reset();

  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 w-[97%] self-center max-w-[455px] mt-[38px]">
      <label htmlFor="todo" className="w-[90%]">
        <input 
          type="text"
          name="todo" 
          id="todo"
          placeholder="Write your next task"
          className="bg-[#1f2937] text-white h-[50px] w-full outline-none p-3 rounded-[11px] border-none"
        />
      </label>
      <button className="bg-[#88ab33] border-none rounded-[11px] w-[40px] h-[50px] flex items-center justify-center hover:bg-[#7a9a2c] transition-colors">
        <span className="visually-hidden">Submit</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/>
        </svg>
      </button>
    </form>
  );
}

export default Form;
