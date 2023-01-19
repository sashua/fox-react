import React, { useRef, useState } from 'react';
import { AiOutlineEdit, AiOutlineSave } from 'react-icons/ai';
import { IconButton } from './IconButton';

interface Props {
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export const Edit: React.FC<Props> = ({
  className = '',
  defaultValue = '',
  disabled = false,
  onChange,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const input = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      onChange?.(input.current?.value ?? '');
    }
    setIsEditing(isEditing => !isEditing);
  };

  return (
    <form
      className={`flex items-center gap-2 ${className}`}
      onSubmit={handleSubmit}
    >
      <input
        ref={input}
        className={`flex-grow p-2 bg-light rounded-md outline-0 disabled:bg-transparent `}
        type="text"
        defaultValue={defaultValue}
        disabled={!isEditing || disabled}
      />

      <IconButton
        icon={isEditing ? AiOutlineSave : AiOutlineEdit}
        type={'submit'}
        disabled={disabled}
      />
    </form>
  );
};
