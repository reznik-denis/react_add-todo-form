import { User } from './User';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  user?: User;
  userId: number;
}