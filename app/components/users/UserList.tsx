import { UserType } from '@/utils/types';
import UserItem from './UserItem';

type UserListProps = {
  users: UserType[];
};

export default function UserList({ users }: UserListProps) {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}
