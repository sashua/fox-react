interface Props {
  className?: string;
  src?: string;
  alt: string;
  size: number;
}

export const Avatar: React.FC<Props> = ({ className, src, alt, size }) => {
  return (
    <img
      className={`border border-mid rounded-full ${className ?? ''}`}
      src={src}
      alt={alt}
      width={size}
      height={size}
    />
  );
};
