import { App } from 'components/App';
import { Posts } from 'features/posts';
import { Todos } from 'features/todos';
import { Users } from 'features/users';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { store } from 'store';
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
