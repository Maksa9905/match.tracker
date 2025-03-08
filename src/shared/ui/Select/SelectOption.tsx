interface SelectOptionProps {
  value: string;
  label: string;
  onClick?: (value: string) => void;
}

export const SelectOption = ({ value, label, onClick }: SelectOptionProps) => {
  return (
    <li
      className="min-h-[48px] p-3 cursor-pointer text-gray3 hover:bg-dark4 hover:text-white"
      onClick={() => onClick?.(value)}
    >
      {label}
    </li>
  );
};
