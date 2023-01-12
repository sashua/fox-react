import { IconType } from 'react-icons';

interface Props {
  icon: IconType;
  caption: string;
  lines: string[];
}

export const Info: React.FC<Props> = ({ icon: Icon, caption, lines }) => {
  return (
    <div className="flex items-center gap-8 text-accent">
      <Icon size={32} />
      <div className="text-dark">
        {lines.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
        <h5 className="text-sm text-middle capitalize">{caption}</h5>
      </div>
    </div>
  );
};
