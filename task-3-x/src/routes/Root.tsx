import { Navigation } from 'components/Navigation';
import { Outlet } from 'react-router-dom';

export const Root: React.FC = () => {
  return (
    <>
      <header className="py-4">
        <div className="container">
          <Navigation />
        </div>
      </header>
      <main className="flex-1 py-8 bg-light">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};
