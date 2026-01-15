function TodoList({todos}) {
  return (
    <ol className="todo_list">
        {todos && todos.length > 0 ? (
            todos?.map((item, index) => (
                <TodoItem key={index} item={item} />
            ))
        ) : (
            <p>No tasks available</p>
        )}
    </ol>
  );
}




function TodoItem({item}) {
    return (
        <li id="{item?.id}" className="todo_item">
            <button className="todo_items_left">
                <svg>
                    <circle cx="10" cy="10" r="8"  strokeWidth="2" fill="white" fillRule="nonzero" />
                </svg>
                <span>{item?.title}</span>
            </button>
            <div className="todo_items_right">
                <button>
                    <span className="visually-hidden">Edit</span>
                    <svg>
                        <path d="" />
                    </svg>
                </button>
                <button>
                    <span className="visually-hidden">Delete</span>
                    <svg>
                        <path d="" />
                    </svg>
                </button>
            </div>
        </li>
    );
}








export default TodoList;