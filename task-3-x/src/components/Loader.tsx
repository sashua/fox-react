import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export const Loader: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center items-center text-accent">
      <AiOutlineLoading3Quarters
        className="animate-spin"
        size={48}
        role="status"
      />
      <span className="sr-only">Loading</span>
    </div>
  );
};
