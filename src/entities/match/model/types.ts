import { Command } from "#entities/command";

export enum MatchStatus {
  LIVE = "LIVE",
  FINISHED = "FINISHED",
  PREPAIRING = "PREPAIRING",
}

export type Match = {
  homeCommand: Command;
  awayCommand: Command;
  score: string;
  status: MatchStatus;
};
