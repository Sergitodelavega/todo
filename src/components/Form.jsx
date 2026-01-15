"use client";

function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
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
        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 0 L8 7 H0 L6 11 L4 18 L10 14 L16 18 L14 11 L20 7 H12 L10 0 Z" fill="black"/>
        </svg>
      </button>
    </form>
  );
}

export default Form;
