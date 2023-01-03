import { ErrorPage } from 'components/ErrorPage';
import { Loader } from 'components/Loader';
import { useGetTodosQuery } from 'store';
import { TodoCard } from './TodoCard';

export const Todos: React.FC = () => {
  const { data, error, isLoading } = useGetTodosQuery();

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorPage />;
  }

  return (
    <ul className="flex flex-col gap-4 p-6 bg-white rounded-2xl shadow">
      {data?.map(todo => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
