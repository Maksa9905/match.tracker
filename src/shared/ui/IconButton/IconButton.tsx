export interface IconButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const IconButton = (props: IconButtonProps) => (
  <button
    className={`cursor-pointer h-fit w-fit ${props.className}`}
    {...props}
  />
);

export default IconButton;
