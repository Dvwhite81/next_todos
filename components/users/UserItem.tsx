import { User } from '@prisma/client';

type UserItemProps = {
  user: User;
};

export default function UserItem({ user }: UserItemProps) {
  const { username, email } = user;

  return (
    <li className="bg-slate-500 max-w-[300px] p-4">
      <h4>username: {username}</h4>
      <p>email: {email}</p>
    </li>
  );
}
