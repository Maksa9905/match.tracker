import { PlayerStatistics } from "#entities/player";

type CommandStatistics = {
  place: number;
  points: number;
  totalKills: number;
  players: PlayerStatistics[];
};

export type Command = {
  name: string;
  logoUrl: string;
  statistics: CommandStatistics;
};
