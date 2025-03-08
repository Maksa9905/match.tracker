import { useState } from "react";
import { SelectOption as TSelectOption } from "../../model";
import { ArrowDownIcon } from "#shared/icons";
import { SelectOption } from "./SelectOption";

export type SelectProps = {
  value: string;
  onChange?: (value: string) => void;
  options?: TSelectOption[];
  label?: string;
};

const Select = ({ value, onChange, options = [], label }: SelectProps) => {
  const [expanded, setExpanded] = useState(false);

  const displayValue =
    options.find((option) => option.value === value)?.label || "";

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleChangeValue = (value: string) => {
    onChange?.(value);
    setExpanded(false);
  };

  const backgroundStyles = expanded ? "bg-dark3 hover:bg-dark3" : "bg-dark5";

  const textStyles = expanded
    ? "text-white hover:text-white"
    : "text-gray3 hover:text-white";

  const borderStyles = expanded
    ? "outline outline-offset-[-1px] outline-dark5 hover:outline-dark5"
    : "";

  return (
    <div className="relative">
      <div
        onClick={handleExpand}
        className={`min-w-[170px] h-[56px] p-4 grid grid-cols-[1fr_auto] rounded-m relative w-fit cursor-pointer ${backgroundStyles} ${textStyles} ${borderStyles}`}
      >
        {displayValue ? (
          displayValue
        ) : (
          <span className="text-gray3">{label}</span>
        )}
        <div className="col-start-2">
          <ArrowDownIcon rotate={expanded ? 180 : 0} />
        </div>

        <input
          className="opacity-0 cursor-pointer w-[100%] bottom-[10px] absolute"
          value={value}
          type="text"
        />
      </div>
      {expanded && (
        <div className="absolute rounded-m max-h-[300px] scrollpanel bg-dark1 min-w-[170px] min-h-[56px] top-[calc(56px+8px)] py-1.5">
          <ul>
            {options.map((option) => (
              <SelectOption
                key={option.value}
                onClick={handleChangeValue}
                {...option}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
