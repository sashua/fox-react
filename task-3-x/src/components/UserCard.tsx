import { User } from 'redux/types';

interface Props {
  user: User;
}

export const UserCard: React.FC<Props> = ({
  user: { username, email, avatar },
}) => {
  return (
    <div className="h-full p-6 text-center bg-white rounded-xl shadow-md">
      <img
        className="w-32 mx-auto mb-6 border border-mid rounded-full"
        src={avatar}
        alt={username}
        width="128"
        height="128"
      />
      <h3 className="mb-2 font-semibold text-xl">{username}</h3>
      <p className="text-accent">{email}</p>
    </div>
  );
};
