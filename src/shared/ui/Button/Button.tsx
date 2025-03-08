import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
};

const Button = ({
  children,
  disabled,
  className: propClassName,
  onClick,
  icon,
}: ButtonProps) => {
  const backgroundColor = disabled
    ? "bg-dark-red active:bg-dark-red target:bg-dark-red"
    : "bg-carmine-red active:bg-ruby-red target:bg-ruby-red";

  const textColor = disabled ? "text-gray5" : "text-white";

  const cursorStyle = disabled ? "" : "cursor-pointer";

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`min-w-[204px] min-h-[56px] rounded-m font-semibold flex items-center justify-center gap-[10px] ${textColor} ${backgroundColor} ${propClassName} ${cursorStyle}`}
    >
      {children}

      {icon}
    </button>
  );
};

export default Button;
