import { Checkbox } from 'components/Checkbox';
import { IconButton } from 'components/IconButton';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { Todo } from 'types';

interface Props {
  todo: Todo;
}

export const TodoCard: React.FC<Props> = ({
  todo: { id, title, completed },
}) => {
  return (
    <li
      className="flex items-center gap-4 p-4 border rounded-xl "
      data-id={id}
    >
      <Checkbox checked={completed} />
      <p className={`mr-auto ${completed ? 'line-through' : ''}`}>{title}</p>
      <IconButton icon={AiOutlineEdit} />
      <IconButton className="text-alert" icon={AiOutlineDelete} />
    </li>
  );
};
