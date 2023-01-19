import { Outlet } from 'react-router-dom';
import { NavTabs } from './NavTabs';

const navLinks = [
  { to: '/', label: 'Posts' },
  { to: '/todos', label: 'Todos' },
  { to: '/users', label: 'Users' },
];

export const App: React.FC = () => {
  return (
    <>
      <header className="py-4">
        <div className="container">
          <nav>
            <NavTabs
              className="font-semibold tracking-wider"
              variant="buttons"
              links={navLinks}
            />
          </nav>
        </div>
      </header>
      <main className="flex-grow flex py-8 bg-light">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};
