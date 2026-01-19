interface Todo 
  { id: number; text: string; is_completed: boolean; 

  }

"use client";

import React from 'react';
import { useState, useEffect } from 'react';
import Form from '@/src/components/Form';
import Header from '@/src/components/Header';
import TodoList from '@/src/components/TodoList';
import TodoHero from '@/src/components/TodoHero';

export default function Home() {
const [todos, setTodos] = useState<Todo[]>([]);

//Retrieve data from localStorage when component mounts
useEffect(() => {
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    setTodos(JSON.parse(storedTodos));
  }
}, []);

const todos_completed = todos.filter(todo => todo.is_completed === true).length;
const total_todos = todos.length;



  return (
    <div className="flex flex-col w-full max-w-md items-center min-h-screen">
      <Header />
      <TodoHero todos_completed={todos_completed} todos_total={total_todos} />
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}
