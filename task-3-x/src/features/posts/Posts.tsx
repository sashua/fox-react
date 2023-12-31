import { useGetPostsQuery } from 'store';
import { ErrorPage } from 'components/ErrorPage';
import { Loader } from 'components/Loader';
import { PostCard } from './PostCard';
import { NewPost } from './NewPost';

export const Posts: React.FC = () => {
  const { data, isLoading, isError } = useGetPostsQuery();

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <ErrorPage />;
  }

  return (
    <>
      <NewPost className="mb-6" />

      <ul
        className="grid grid-cols-1 gap-8
        sm:grid-cols-2
        lg:grid-cols-3"
      >
        {data?.map(post => (
          <li
            key={post.id}
            className="bg-white overflow-hidden rounded-xl shadow-md"
          >
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </>
  );
};
