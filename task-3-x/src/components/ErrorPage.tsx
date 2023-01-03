import { AiOutlineExclamationCircle } from 'react-icons/ai';

export const ErrorPage: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-middle">
      <AiOutlineExclamationCircle className="mb-6 text-accent" size={48} />
      <p className="mb-2 text-xl">Oops! Something went wrong!</p>
      <p>For some reason, we couldn't load all that stuff...</p>
    </div>
  );
};
