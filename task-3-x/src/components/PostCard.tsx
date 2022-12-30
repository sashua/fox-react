import { Post } from 'redux/types';

interface Props {
  post: Post;
}

export const PostCard: React.FC<Props> = ({
  post: { title, tags, text, dateCreated, imageUrl },
}) => {
  return (
    <div className="flex flex-col h-full bg-white overflow-hidden rounded-xl shadow-md">
      <img
        className="aspect-video object-cover rounded-xl"
        src={imageUrl}
        alt={title}
      />
      <div className="flex-1 flex flex-col p-6">
        <ul className="flex gap-2 mb-4 text-sm text-accent">
          {tags.map(tag => (
            <li key={tag}>#{tag}</li>
          ))}
        </ul>
        <h2 className="mb-4 text-xl font-semibold">{title}</h2>
        <p
          className="mb-4 text-middle
            overflow-hidden whitespace-pre-wrap
            [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4]"
        >
          {text}
        </p>
        <p className="mt-auto font-semibold text-xs text-right text-middle">
          {dateCreated}
        </p>
      </div>
    </div>
  );
};
