import { RefreshIcon } from "#shared/icons";

type LoaderProp = {
  size?: number;
  className?: string;
  disabled?: boolean;
};

const Loader = ({ size, className, disabled }: LoaderProp) => {
  return (
    <div className={`animate-spin w-fit ${className}`}>
      <RefreshIcon size={size} disabled={disabled} />
    </div>
  );
};

export default Loader;
