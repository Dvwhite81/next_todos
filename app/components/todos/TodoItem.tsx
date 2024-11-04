import { ToDoType, UserType } from '@/utils/types'

type TodoItemProps = {
  todo: ToDoType;
  users: UserType[]
}

export default function TodoItem({ todo, users }: TodoItemProps) {
  const { title, description, created_at, user_id} = todo;

  return (
    <li>
      <h4>title: {title}</h4>
      <p>description: {description}</p>
      <p>created at: {created_at.toLocaleString()}</p>
      <p>user: {users.find((user) => user.id === user_id)?.email}</p>
    </li>
  );
};
