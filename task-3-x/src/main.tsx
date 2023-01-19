import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Modal from 'react-modal';
import { store } from 'store';
import { App } from 'components/App';
import { Posts } from 'features/posts';
import { Todos } from 'features/todos';
import { Users } from 'features/users';
import {
  UserDetails,
  AboutUser,
  UserAlbums,
  UserPosts,
  UserTodos,
} from 'features/user-details';
import './main.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Posts />,
      },
      {
        path: 'todos',
        element: <Todos />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'users/:id',
        element: <UserDetails />,
        children: [
          {
            index: true,
            element: <AboutUser />,
          },
          {
            path: 'albums',
            element: <UserAlbums />,
          },
          {
            path: 'todos',
            element: <UserTodos />,
          },
          {
            path: 'posts',
            element: <UserPosts />,
          },
        ],
      },
    ],
  },
]);

Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    <Toaster />
  </React.StrictMode>
);
