import { RefreshIcon } from "#shared/icons";

type LoaderProp = {
  size?: number;
  className?: string;
};

const Loader = ({ size, className }: LoaderProp) => {
  return (
    <div className={`animate-spin w-fit ${className}`}>
      <RefreshIcon size={size} />
    </div>
  );
};

export default Loader;
