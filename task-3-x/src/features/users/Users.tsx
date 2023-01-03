import { ErrorPage } from 'components/ErrorPage';
import { Loader } from 'components/Loader';
import { useGetUsersQuery } from 'store';
import { UserCard } from './UserCard';

export const Users: React.FC = () => {
  const { data, error, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorPage />;
  }

  return (
    <ul
      className="grid grid-cols-1 gap-16
        sm:grid-cols-2
        lg:grid-cols-4"
    >
      {data?.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  );
};
