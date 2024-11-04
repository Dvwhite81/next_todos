import { ToDoType, UserType } from './types';

export const initialUsers: UserType[] = [
  {
    id: '1',
    username: 'dan',
    email: 'dan@dan.com',
    password: 'pass',
  },
  {
    id: '2',
    username: 'bob',
    email: 'bob@bob.com',
    password: 'pass',
  },
];

export const initialTodos: ToDoType[] = [
  {
    id: 'a',
    title: 'First Todo',
    description: 'This is the first todo',
    completed: false,
    user_id: '1',
    created_at: 'Sun Nov 03 2024 23:04:52 GMT-0500 (Eastern Standard Time)',
    updated_at: 'Sun Nov 03 2024 23:04:52 GMT-0500 (Eastern Standard Time)',
  },
  {
    id: 'b',
    title: 'Second Todo',
    description: 'This is the second todo',
    completed: false,
    user_id: '1',
    created_at: 'Sun Nov 03 2024 23:04:52 GMT-0500 (Eastern Standard Time)',
    updated_at: 'Sun Nov 03 2024 23:04:52 GMT-0500 (Eastern Standard Time)',
  },
  {
    id: 'c',
    title: 'Third Todo',
    description: 'This is the third todo',
    completed: false,
    user_id: '2',
    created_at: 'Sun Nov 03 2024 23:04:52 GMT-0500 (Eastern Standard Time)',
    updated_at: 'Sun Nov 03 2024 23:04:52 GMT-0500 (Eastern Standard Time)',
  },
  {
    id: 'd',
    title: 'Fourth Todo',
    description: 'This is the fourth todo',
    completed: false,
    user_id: '2',
    created_at: 'Sun Nov 03 2024 23:04:52 GMT-0500 (Eastern Standard Time)',
    updated_at: 'Sun Nov 03 2024 23:04:52 GMT-0500 (Eastern Standard Time)',
  },
];
