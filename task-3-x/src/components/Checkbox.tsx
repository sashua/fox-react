import { AiOutlineCheck } from 'react-icons/ai';

interface Props {
  checked: boolean;
  onChange?: () => void;
}

export const Checkbox: React.FC<Props> = ({ checked, onChange }) => {
  return (
    <label className="relative inline-block w-5 h-5 cursor-pointer">
      <input
        className="absolute inset-0 border border-accent rounded-md appearance-none outline-none cursor-pointer"
        type="checkbox"
        defaultChecked={checked}
        onChange={onChange}
      />
      <span className="absolute inset-0 flex items-center justify-center text-accent">
        {checked && <AiOutlineCheck size="1rem" />}
      </span>
    </label>
  );
};
