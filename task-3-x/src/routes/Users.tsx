import { UserCard } from 'components/UserCard';
import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/usersSlice';

export const Users: React.FC = () => {
  const users = useSelector(selectUsers);

  return (
    <ul
      className="grid grid-cols-1 gap-16
        sm:grid-cols-2
        lg:grid-cols-4"
    >
      {users.map(user => (
        <li key={user.id}>
          <UserCard user={user} />
        </li>
      ))}
    </ul>
  );
};
