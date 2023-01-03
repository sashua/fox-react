import { User } from 'types';

interface Props {
  user: User;
}

export const UserCard: React.FC<Props> = ({
  user: { name, username, avatar },
}) => {
  return (
    <li className="h-full p-4 text-center bg-white rounded-xl shadow-md">
      <img
        className="w-32 mx-auto mb-6 border border-mid rounded-full"
        src={avatar}
        alt={username}
        width="128"
        height="128"
      />
      <h3 className="mb-2 font-semibold text-xl">{name}</h3>
      <p className="text-accent">"{username}"</p>
    </li>
  );
};
