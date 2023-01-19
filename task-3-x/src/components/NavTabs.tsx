import { NavLink } from 'react-router-dom';

interface Props {
  className?: string;
  variant?: 'tabs' | 'buttons';
  links: { to: string; label: string }[];
}

export const NavTabs: React.FC<Props> = ({
  className = '',
  variant = 'tabs',
  links,
}) => {
  return (
    <ul className="flex">
      {links.map(({ to, label }, idx) => (
        <li
          key={idx}
          className={`${
            variant === 'buttons'
              ? 'border-y border-r border-accent overflow-hidden first:border-l first:rounded-l-xl last:rounded-r-xl'
              : ''
          }`}
        >
          <NavLink
            className={`block min-w-[6rem] px-4 text-center ${
              variant === 'tabs'
                ? 'pt-4 pb-2 text-white bg-accent rounded-t-md [&.active]:text-accent [&.active]:bg-white'
                : 'py-2 text-accent bg-white [&.active]:text-white [&.active]:bg-accent'
            } ${className}`}
            to={to}
            end={to === ''}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
