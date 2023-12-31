import { useGetTodosQuery } from 'store';
import { ErrorPage } from 'components/ErrorPage';
import { Loader } from 'components/Loader';
import { TodoCard } from './TodoCard';

export const Todos: React.FC = () => {
  const { data, isLoading, isError } = useGetTodosQuery();

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <ErrorPage />;
  }

  return (
    <ul className="flex flex-col gap-4 p-8 bg-white rounded-2xl shadow">
      {data?.map(todo => (
        <li key={todo.id} className="px-4 py-2 border rounded-xl">
          <TodoCard todo={todo} />
        </li>
      ))}
    </ul>
  );
};
