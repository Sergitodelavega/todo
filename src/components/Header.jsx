function Header() {
  return (
    <header className="flex justify-start items-center p-[42px] gap-3 w-full">
      <svg 
        width="100" 
        height="100" 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 md:w-20 md:h-20"
      >
        <circle cx="50" cy="50" r="40" stroke="#88ab33" strokeWidth="3" fill="transparent" />
      </svg>
      <h1 className="text-2xl md:text-3xl font-bold text-white">Todo App</h1>
    </header>
  );
}

export default Header;
