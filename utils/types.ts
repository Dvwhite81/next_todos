export type ToDoType = {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  user_id: string;
  created_at: string;
  updated_at: string;
};

export type UserType = {
  id: string;
  username: string;
  email: string;
  password: string;
};
