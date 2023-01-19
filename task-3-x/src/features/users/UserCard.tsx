import { Link } from 'react-router-dom';
import { User } from 'types';
import { Avatar } from 'components/Avatar';

interface Props {
  user: User;
}

export const UserCard: React.FC<Props> = ({
  user: { id, name, username, avatar },
}) => {
  return (
    <Link
      to={`${id}`}
      className="flex flex-col items-center justify-center h-full p-4"
    >
      <Avatar
        className="w-3/5 h-3/5 mx-auto mb-6"
        src={avatar}
        alt={name}
        size={128}
      />
      <h3 className="mb-2 font-semibold text-xl">{name}</h3>
      <p className="text-accent">"{username}"</p>
    </Link>
  );
};
