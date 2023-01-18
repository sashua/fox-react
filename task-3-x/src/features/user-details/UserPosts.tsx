import { useParams } from 'react-router-dom';
import { useGetUserPostsQuery } from 'store';
import { ErrorPage } from 'components/ErrorPage';
import { Loader } from 'components/Loader';
import { PostCard, NewPost } from 'features/posts';

export const UserPosts: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetUserPostsQuery(Number(id));

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <ErrorPage />;
  }

  return (
    <>
      <NewPost className="mb-6" selectedUserId={Number(id)} />

      <ul
        className="grid grid-cols-1 gap-8
        sm:grid-cols-2
        lg:grid-cols-3"
      >
        {data?.map(post => (
          <li key={post.id} className="border rounded-xl">
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </>
  );
};
