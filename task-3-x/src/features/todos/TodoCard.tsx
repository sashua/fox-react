import { Checkbox } from 'components/Checkbox';
import { Edit } from 'components/Edit';
import { IconButton } from 'components/IconButton';
import { AiOutlineDelete } from 'react-icons/ai';
import { useDeleteTodoMutation, useUpdateTodoMutation } from 'store';
import { Todo } from 'types';

interface Props {
  todo: Todo;
}

export const TodoCard: React.FC<Props> = ({
  todo: { id, title, completed },
}) => {
  const [triggerUpdate, { isLoading: isUpdating }] = useUpdateTodoMutation();
  const [triggerDelete, { isLoading: isDeleting }] = useDeleteTodoMutation();

  const handleEditTodo = (title: string) => {
    triggerUpdate({ id, title });
  };

  const handleToggleTodo = () => {
    triggerUpdate({ id, completed: !completed });
  };
  const handleDeleteTodo = () => {
    triggerDelete(id);
  };

  const isDisabled = isUpdating || isDeleting;

  return (
    <li
      className="flex items-center gap-4 px-4 py-2 border rounded-xl "
      data-id={id}
    >
      <Checkbox
        checked={completed}
        disabled={isDisabled}
        onChange={handleToggleTodo}
      />
      <Edit
        className={`flex-grow mr-auto ${completed ? 'line-through' : ''}`}
        defaultValue={title}
        disabled={isDisabled}
        onChange={handleEditTodo}
      />
      <IconButton
        className="text-alert"
        icon={AiOutlineDelete}
        disabled={isDisabled}
        onClick={handleDeleteTodo}
      />
    </li>
  );
};
