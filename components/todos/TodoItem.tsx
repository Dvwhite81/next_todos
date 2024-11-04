import prisma from '@/lib/prisma';
import { TodoWithUser } from '@/utils/types';

type TodoItemProps = {
  todo: TodoWithUser;
};

export default async function TodoItem({ todo }: TodoItemProps) {
  const { title, content, userId } = todo;
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return (
    <li className="bg-slate-500 max-w-[300px] p-4">
      <h4>title: {title}</h4>
      <p>content: {content}</p>
      <p>user: {user?.username}</p>
    </li>
  );
}
