import { IconType } from 'react-icons';

interface Props {
  icon: IconType;
  size?: number;
  className?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  disabled?: boolean;
  onClick?: () => void;
}

export const IconButton: React.FC<Props> = ({
  className = '',
  icon: Icon,
  size = 20,
  type = 'button',
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={`disabled:text-middle ${className}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      <Icon size={size} />
    </button>
  );
};
