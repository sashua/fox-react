import { useState } from 'react';
import Modal from 'react-modal';
import { useGetPostsQuery } from 'store';
import { ErrorPage } from 'components/ErrorPage';
import { Loader } from 'components/Loader';
import { Button } from 'components/Button';
import { PostCard } from './PostCard';
import { NewPost } from './NewPost';

export const Posts: React.FC = () => {
  const { data, isLoading, isError } = useGetPostsQuery();
  const [isNewPostOpen, setIsNewPostOpen] = useState(false);

  const handleNewPost = () => {
    setIsNewPostOpen(true);
  };

  const handleModalClose = () => {
    setIsNewPostOpen(false);
  };

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <ErrorPage />;
  }

  return (
    <>
      <Modal
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            max-w-[40rem] p-6 bg-white rounded-xl"
        overlayClassName="fixed inset-0 bg-black bg-opacity-40"
        bodyOpenClassName="fixed w-full"
        isOpen={isNewPostOpen}
        onRequestClose={handleModalClose}
      >
        <NewPost onClose={handleModalClose} />
      </Modal>

      <Button className="mb-4" onClick={handleNewPost}>
        New post
      </Button>

      <ul
        className="grid grid-cols-1 gap-8
        sm:grid-cols-2
        lg:grid-cols-3"
      >
        {data?.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
};
