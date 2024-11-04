import prisma from '@/lib/prisma';
import UserItem from './UserItem';
import { User } from '@prisma/client';

export default async function UserList() {
  const users: User[] = await prisma.user.findMany();

  return (
    <div>
      <h2>Users</h2>
      <ul className="mt-16 grid grid-rows-2 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}
