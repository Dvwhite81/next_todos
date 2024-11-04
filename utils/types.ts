import { Todo } from '@prisma/client';

export interface TodoWithUser extends Todo {
  user: {
    username: string;
  };
}

export type UserType = {
  id: string;
  username: string;
  email: string;
  password: string;
};
