"use client";

function Form() {

    const handleSubmit = (event) => {
        event.preventDefault();

        event.target.reset();
    }

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="todo">
        <input 
            type="text"
            name="todo" 
            id="todo"
            placeholder="Write your next task"
            />
      </label>
      <button>
        <span className="visually-hidden">Submit</span>
        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 0 L8 7 H0 L6 11 L4 18 L10 14 L16 18 L14 11 L20 7 H12 L10 0 Z" fill="black"/>
        </svg>
      </button>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;