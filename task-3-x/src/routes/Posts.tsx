import { PostCard } from 'components/PostCard';
import { useSelector } from 'react-redux';
import { selectPosts } from 'redux/postsSlice';

export const Posts: React.FC = () => {
  const posts = useSelector(selectPosts);

  return (
    <ul
      className="grid grid-cols-1 gap-8
        sm:grid-cols-2
        lg:grid-cols-3"
    >
      {posts.map(post => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};
