import { UserType } from '@/utils/types';

type UserItemProps = {
  user: UserType;
};

export default function UserItem({ user }: UserItemProps) {
  const { username, email } = user;

  return (
    <li>
      <h4>username: {username}</h4>
      <p>email: {email}</p>
    </li>
  );
}
