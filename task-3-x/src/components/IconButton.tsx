import { IconType } from 'react-icons';

interface Props {
  icon: IconType;
  className?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  disabled?: boolean;
  onClick?: () => void;
}

export const IconButton: React.FC<Props> = ({
  icon: Icon,
  className = '',
  type = 'button',
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={`w-5 h-5 flex items-center justify-center disabled:text-middle ${className}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      <Icon size="1.25rem" />
    </button>
  );
};
