export interface Post {
  id: string;
  title: string;
  tags: string[];
  text: string;
  dateCreated: string;
  imageUrl: string;
  articleUrl: string;
}

export interface Todo {
  id: string;
  text: string;
  dateCreated: string;
  isDone: boolean;
}

export interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
}

export interface State {
  posts: Post[];
  todos: Todo[];
  users: User[];
}
