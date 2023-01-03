import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export const App: React.FC = () => {
  return (
    <>
      <header className="py-4">
        <div className="container">
          <Navigation />
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
