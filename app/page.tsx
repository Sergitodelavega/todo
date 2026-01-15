import React from 'react';
import Form from '@/src/components/Form';
import Header from '@/src/components/Header';
import TodoList from '@/src/components/TodoList';
import TodoHero from '@/src/components/TodoHero';

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-md items-center min-h-screen">
      <Header />
      <TodoHero todos_completed={0} todos_total={0} />
      <Form />
      <TodoList todos={[]} />
    </div>
  );
}
