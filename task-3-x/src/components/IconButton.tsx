import { IconType } from 'react-icons';

interface Props {
  icon: IconType;
  className?: string;
  onClick: () => void;
}

export const IconButton: React.FC<Props> = ({
  icon: Icon,
  className = '',
  onClick,
}) => {
  return (
    <button
      className={`w-5 h-5 flex items-center justify-center ${className}`}
      onClick={onClick}
    >
      <Icon size="1.25rem" />
    </button>
  );
};
