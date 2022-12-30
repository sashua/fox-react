import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', text: 'Posts' },
  { to: '/todos', text: 'Todos' },
  { to: '/users', text: 'Users' },
];

export const Navigation: React.FC = () => {
  return (
    <nav className="flex gap-2">
      {links.map(({ to, text }) => (
        <NavLink
          className="px-4 py-2 font-semibold tracking-wide text-accent bg-white border border-accent rounded-lg
            [&.active]:text-white [&.active]:bg-accent"
          key={to}
          to={to}
        >
          {text}
        </NavLink>
      ))}
    </nav>
  );
};
