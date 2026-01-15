function TodoHero({todos_completed, todos_total}) {
  return (
    <section>
        <div>
            <p>Task Done</p>
            <p>Keep it up</p>
        </div>
        <div>
            {todos_completed} / {todos_total}
        </div>
    </section>
  );
}

export default TodoHero;