import { PlayerStatisticsCard } from "#entities/player";
import { PlayerStatistics } from "#entities/player";
import { StatisticsItem } from "#shared/ui";
import { useTranslation } from "react-i18next";

export type CommandInfoProps = {
  points: number;
  place: number;
  totalKills: number;
  players: PlayerStatistics[];
};

const CommandInfo = ({
  points,
  place,
  totalKills,
  players,
}: CommandInfoProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex gap-2 justify-between">
        {players.map((player) => (
          <PlayerStatisticsCard key={player.name} {...player} />
        ))}
      </div>
      <div className="flex justify-around bg-dark2 py-3.5 rounded-m">
        <StatisticsItem
          label={t("match.info.points")}
          value={points.toString()}
        />
        <StatisticsItem
          label={t("match.info.place")}
          value={place.toString()}
        />
        <StatisticsItem
          label={t("match.info.totalKills")}
          value={totalKills.toString()}
        />
      </div>
    </div>
  );
};

export default CommandInfo;
