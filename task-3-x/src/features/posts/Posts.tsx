import { ErrorPage } from 'components/ErrorPage';
import { Loader } from 'components/Loader';
import { useGetPostsQuery } from 'store';
import { PostCard } from './PostCard';

export const Posts: React.FC = () => {
  const { data, error, isLoading } = useGetPostsQuery();

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorPage />;
  }

  return (
    <ul
      className="grid grid-cols-1 gap-8
        sm:grid-cols-2
        lg:grid-cols-3"
    >
      {data?.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </ul>
  );
};
