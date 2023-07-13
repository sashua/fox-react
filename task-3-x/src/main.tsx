import { App } from 'components/App';
import { Posts } from 'features/posts';
import { Todos } from 'features/todos';
import {
  AboutUser,
  UserAlbums,
  UserDetails,
  UserPosts,
  UserTodos,
} from 'features/user-details';
import { Users } from 'features/users';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import Modal from 'react-modal';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { store } from 'store';
import './main.css';

const router = createBrowserRouter(
  [
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
  ],
  { basename: '/fox-react/' }
);

Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    <Toaster />
  </React.StrictMode>
);
