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
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  avatar?: string;
}

export type Posts = Post[];
export type Todos = Todo[];
export type Users = User[];
