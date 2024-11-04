import UserList from '../components/users/UserList';
import TodoList from '../components/todos/TodoList';

export default function Home() {
  return (
    <div>
      <UserList />
      <TodoList />
    </div>
  );
}
