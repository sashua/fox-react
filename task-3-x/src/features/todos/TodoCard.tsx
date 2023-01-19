import { AiOutlineDelete } from 'react-icons/ai';
import { Todo } from 'types';
import { useDeleteTodoMutation, useUpdateTodoMutation } from 'store';
import { Checkbox } from 'components/Checkbox';
import { Edit } from 'components/Edit';
import { IconButton } from 'components/IconButton';

interface Props {
  todo: Todo;
}

export const TodoCard: React.FC<Props> = ({
  todo: { id, userId, title, completed },
}) => {
  const [triggerUpdate, { isLoading: isUpdating }] = useUpdateTodoMutation();
  const [triggerDelete, { isLoading: isDeleting }] = useDeleteTodoMutation();

  const handleEditTodo = (title: string) => {
    triggerUpdate({ id, userId, title });
  };

  const handleToggleTodo = () => {
    triggerUpdate({ id, userId, completed: !completed });
  };
  const handleDeleteTodo = () => {
    triggerDelete({ id, userId });
  };

  const isDisabled = isUpdating || isDeleting;

  return (
    <div className="flex items-center gap-4">
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
    </div>
  );
};
