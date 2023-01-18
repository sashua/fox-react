import { useRef } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

interface Props {
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox: React.FC<Props> = ({
  checked,
  disabled = false,
  onChange,
}) => {
  const input = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    onChange(input.current?.checked ?? checked);
  };

  return (
    <label
      className={`relative inline-block w-5 h-5 cursor-pointer ${
        disabled ? 'text-middle' : 'text-accent'
      }`}
    >
      <input
        className="absolute inset-0 border border-current rounded-md appearance-none outline-none cursor-pointer"
        type="checkbox"
        defaultChecked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <span className="absolute inset-0 flex items-center justify-center">
        {checked && <AiOutlineCheck size="1rem" />}
      </span>
    </label>
  );
};
