import { Post } from 'types';

interface Props {
  post: Post;
}

export const PostCard: React.FC<Props> = ({ post: { title, body, image } }) => {
  return (
    <div className="flex flex-col">
      <img
        className="aspect-video object-cover rounded-xl"
        src={image}
        alt={title}
      />
      <div className="flex-1 flex flex-col px-6 py-8">
        <h2
          className="mb-4 font-semibold text-xl capitalize overflow-hidden whitespace-pre-wrap
            [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:1]"
        >
          {title}
        </h2>
        <p
          className="text-middle overflow-hidden whitespace-pre-wrap
            [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4]"
        >
          {body}
        </p>
      </div>
    </div>
  );
};
