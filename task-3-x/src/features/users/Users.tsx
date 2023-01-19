import { useGetUsersQuery } from 'store';
import { ErrorPage } from 'components/ErrorPage';
import { Loader } from 'components/Loader';
import { UserCard } from './UserCard';

export const Users: React.FC = () => {
  const { data, isLoading, isError } = useGetUsersQuery();

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <ErrorPage />;
  }

  return (
    <ul
      className="grid grid-cols-1 gap-8
        sm:grid-cols-2
        lg:grid-cols-4"
    >
      {data?.map(user => (
        <li
          key={user.id}
          className="aspect-square bg-white rounded-xl shadow-md"
        >
          <UserCard user={user} />
        </li>
      ))}
    </ul>
  );
};
