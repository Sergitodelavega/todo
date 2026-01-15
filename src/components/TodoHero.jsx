function TodoHero({todos_completed, todos_total}) {
  return (
    <section className="border border-[#c2b39a] flex items-center justify-around w-[90%] max-w-[445px] p-3 rounded-[11px]">
      <div>
        <p className="text-white text-sm">Task Done</p>
        <p className="text-white text-sm">Keep it up</p>
      </div>
      <div className="bg-[#88ab33] w-[150px] h-[150px] rounded-full text-4xl flex items-center justify-center text-center">
        {todos_completed} / {todos_total}
      </div>
    </section>
  );
}

export default TodoHero;
