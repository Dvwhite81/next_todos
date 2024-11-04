import prisma from '@/lib/prisma';
import TodoItem from './TodoItem';
import { TodoWithUser } from '@/utils/types';

export default async function TodoList() {
  const todos: TodoWithUser[] = await prisma.todo.findMany({
    include: {
      user: {
        select: { username: true },
      },
    },
  });

  return (
    <div>
      <h2>Todos</h2>
      <ul className="mt-16 grid grid-rows-2 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
