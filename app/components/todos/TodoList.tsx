import { ToDoType, UserType } from '@/utils/types';
import TodoItem from './TodoItem';

type TodoListProps = {
  todos: ToDoType[];
  users: UserType[];
};

export default function TodoList({ todos, users }: TodoListProps) {
  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} users={users} />
        ))}
      </ul>
    </div>
  );
}
