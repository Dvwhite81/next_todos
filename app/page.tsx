'use client';

import { useState } from 'react';
import { initialTodos, initialUsers } from '@/utils/data';
import { ToDoType, UserType } from '@/utils/types';
import UserList from './components/users/UserList';
import TodoList from './components/todos/TodoList';

export default function Home() {
  const [users] = useState<UserType[]>(initialUsers);
  const [todos] = useState<ToDoType[]>(initialTodos);
  /*
  const [users, setUsers] = useState<UserType[]>(initialUsers);
  const [todos, setTodos] = useState<ToDoType[]>(initialTodos);


  const addUser = (user: UserType) => {
    const newUsers = [...users, user];
    setUsers(newUsers);
  };

  const addTodo = (todo: ToDoType) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };
  */

  return (
    <div>
      <UserList users={users} />
      <TodoList todos={todos} users={users} />
    </div>
  );
}
