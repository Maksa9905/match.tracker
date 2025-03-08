export type StatisticsItemProps = {
  value: string;
  label: string;
};

const StatisticItem = ({ value, label }: StatisticsItemProps) => {
  return (
    <div>
      <div>
        <span className="text-m font-medium text-gray7">{label}: </span>
        <span className="text-l font-semibold text-white">{value}</span>
      </div>
    </div>
  );
};

export default StatisticItem;
