interface Props {
  className?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Button: React.FC<Props> = ({
  className = '',
  type = 'button',
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <button
      className={`min-w-[6rem] px-4 py-2 text-white bg-accent rounded-lg disabled:bg-middle ${className}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
