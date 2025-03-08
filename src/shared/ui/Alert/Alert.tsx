import { ReactNode } from "react";

export interface AlertProps {
  icon?: ReactNode;
  children: ReactNode;
}

const Alert = ({ children, icon }: AlertProps) => {
  return (
    <div className="px-6 h-[56px] w-fit bg-dark1 rounded-m flex justify-center items-center gap-2.5 text-white text-xl font-medium">
      {icon}
      {children}
    </div>
  );
};

export default Alert;
