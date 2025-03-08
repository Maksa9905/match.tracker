import { useTranslation } from "react-i18next";
import { MatchStatus } from "../model";

export type StatusCardProps = {
  status: MatchStatus;
  className?: string;
  score?: string;
};

const StatusCard = ({
  status,
  className: propClassName,
  score,
}: StatusCardProps) => {
  const { t } = useTranslation();

  const backgroundColor = {
    [MatchStatus.FINISHED]: "bg-carmine-red",
    [MatchStatus.LIVE]: "bg-green",
    [MatchStatus.PREPAIRING]: "bg-orange",
  };

  return (
    <div className="w-fit text-center">
      <span className="text-[20px] font-semibold tracking-widest  ">
        {score ?? "0:0"}
      </span>
      <div
        className={`text-s py-[6px] px-2 min-w-[92px] w-fit text-center font-semibold text-white rounded-m ${backgroundColor[status]} ${propClassName}`}
      >
        {t("match.status", { context: status })}
      </div>
    </div>
  );
};

export default StatusCard;
