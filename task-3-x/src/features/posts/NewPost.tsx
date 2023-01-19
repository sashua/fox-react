import { useState } from 'react';
import Modal from 'react-modal';
import { User } from 'types';
import { Button } from 'components/Button';
import { NewPostForm } from './NewPostForm';

interface Props {
  selectedUserId?: User['id'];
  className?: string;
}

export const NewPost: React.FC<Props> = ({
  selectedUserId,
  className = '',
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewPost = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button className={`shadow ${className}`} onClick={handleNewPost}>
        New post
      </Button>

      <Modal
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            max-w-[40rem] p-6 bg-white rounded-xl"
        overlayClassName="fixed inset-0 bg-black bg-opacity-40"
        bodyOpenClassName="fixed w-full"
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
      >
        <NewPostForm
          selectedUserId={selectedUserId}
          onClose={handleModalClose}
        />
      </Modal>
    </>
  );
};
