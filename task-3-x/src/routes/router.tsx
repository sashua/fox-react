import { createBrowserRouter } from 'react-router-dom';
import { Posts } from './Posts';
import { Root } from './Root';
import { Todos } from './Todos';
import { Users } from './Users';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
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
