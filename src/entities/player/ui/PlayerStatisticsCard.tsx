import { StatisticsItem } from "#shared/ui";
import { useTranslation } from "react-i18next";

interface PlayerStatisticsCardProps {
  name: string;
  kills: number;
  avatarUrl: string;
}

const PlayerStatisticsCard = ({
  name,
  kills,
  avatarUrl,
}: PlayerStatisticsCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between h-[52px] w-full rounded-m items-center px-6 py-3.5 bg-dark2">
      <div className="flex items-center gap-2">
        <div className="w-9 h-9">
          <img src={avatarUrl} alt={`${name} avatar`} />
        </div>
        <span className="text-l font-semibold text-white">{name}</span>
      </div>
      <StatisticsItem label={t("kills")} value={kills.toString()} />
    </div>
  );
};

export default PlayerStatisticsCard;
