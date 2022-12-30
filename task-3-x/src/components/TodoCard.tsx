import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from 'redux/todosSlice';
import { Todo } from 'redux/types';
import { Checkbox } from './Checkbox';
import { IconButton } from './IconButton';

interface Props {
  todo: Todo;
}

export const TodoCard: React.FC<Props> = ({ todo: { id, text, isDone } }) => {
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(toggleTodo(id));
  const handleDelete = () => dispatch(deleteTodo(id));

  return (
    <div
      className="flex items-center gap-4 p-4 border rounded-xl "
      data-id={id}
    >
      <Checkbox checked={isDone} onChange={handleToggle} />
      <p className={`mr-auto ${isDone ? 'line-through' : ''}`}>{text}</p>
      {/* <IconButton icon={AiOutlineEdit} /> */}
      <IconButton
        className="text-alert"
        icon={AiOutlineDelete}
        onClick={handleDelete}
      />
    </div>
  );
};
