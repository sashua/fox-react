import { useParams } from 'react-router-dom';
import { useGetUserTodosQuery } from 'store';
import { ErrorPage } from 'components/ErrorPage';
import { Loader } from 'components/Loader';
import { TodoCard } from 'features/todos';

export const UserTodos: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetUserTodosQuery(Number(id));

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <ErrorPage />;
  }

  return (
    <ul className="flex flex-col gap-4">
      {data?.map(todo => (
        <li key={todo.id} className="px-4 py-2 border rounded-xl">
          <TodoCard todo={todo} />
        </li>
      ))}
    </ul>
  );
};
