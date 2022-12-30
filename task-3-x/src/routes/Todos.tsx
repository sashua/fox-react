import { TodoCard } from 'components/TodoCard';
import { useSelector } from 'react-redux';
import { selectTodos } from 'redux/todosSlice';

export const Todos: React.FC = () => {
  const todos = useSelector(selectTodos);

  return (
    <ul className="flex flex-col gap-4 p-6 bg-white rounded-2xl shadow">
      {todos.map(todo => (
        <li key={todo.id}>
          <TodoCard todo={todo} />
        </li>
      ))}
    </ul>
  );
};
