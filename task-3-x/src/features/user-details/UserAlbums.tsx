import { useParams } from 'react-router-dom';
import { useGetUserAlbumsQuery } from 'store';
import { ErrorPage } from 'components/ErrorPage';
import { Loader } from 'components/Loader';

export const UserAlbums: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetUserAlbumsQuery(Number(id));

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <ErrorPage />;
  }

  return (
    <ul
      className="grid grid-cols-1 gap-8
        sm:grid-cols-2
        lg:grid-cols-4"
    >
      {data?.map(({ id, title, image }) => (
        <li
          key={id}
          className={`relative aspect-square rounded-xl overflow-hidden`}
        >
          <img className="w-full h-full object-cover" src={image} alt={title} />
          <div className="absolute inset-0 flex items-center">
            <h3 className="flex-grow p-4 text-xl leading-relaxed text-white capitalize bg-black/50">
              {title}
            </h3>
          </div>
        </li>
      ))}
    </ul>
  );
};
