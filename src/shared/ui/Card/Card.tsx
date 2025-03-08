import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`p-4 rounded-m bg-linear-to-r from-card-from to-card-to text-white ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
