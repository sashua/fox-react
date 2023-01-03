export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  image?: string;
}

export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  avatar?: string;
}

export type Posts = Post[];
export type Todos = Todo[];
export type Users = User[];
