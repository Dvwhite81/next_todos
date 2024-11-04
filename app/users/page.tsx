import UserList from '../components/users/UserList';

export default async function UsersPage() {
  const response = await fetch('http://localhost:3000/api/users');
  console.log('response:', response);
  const users = await response.json();
  console.log('users:', users);
  return (
    <div>
      <UserList users={users} />{' '}
    </div>
  );
}
