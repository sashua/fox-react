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
