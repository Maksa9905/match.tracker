import { ApiResponse } from "#shared/model";
import { GetMatchesResponse, MatchStatusResponse } from "../api";
import { Match, MatchStatus } from "./types";

export const mapGetMatchesResponse = (
  response: ApiResponse<GetMatchesResponse>
): Match[] => {
  return response.data.matches.map((match) => ({
    homeCommand: {
      name: match.homeTeam.name,
      logoUrl: "https://i.imgur.com/RBDWJeb.png",
      statistics: {
        place: match.homeTeam.place,
        points: match.homeTeam.points,
        totalKills: match.homeTeam.total_kills,
        players: match.homeTeam.players.map((player) => ({
          name: player.username,
          kills: player.kills,
          avatarUrl: "https://i.imgur.com/RBDWJeb.png",
        })),
      },
    },
    awayCommand: {
      name: match.awayTeam.name,
      place: match.awayTeam.place,
      logoUrl: "https://i.imgur.com/RBDWJeb.png",
      statistics: {
        place: match.awayTeam.place,
        points: match.awayTeam.points,
        totalKills: match.awayTeam.total_kills,
        players: match.awayTeam.players.map((player) => ({
          name: player.username,
          kills: player.kills,
          avatarUrl: "https://i.imgur.com/RBDWJeb.png",
        })),
      },
    },
    score: `${match.homeScore} : ${match.awayScore}`,
    status: mapMatchStatus(match.status),
  }));
};

export const mapMatchStatus = (status: MatchStatusResponse): MatchStatus => {
  switch (status) {
    case MatchStatusResponse.Finished:
      return MatchStatus.FINISHED;
    case MatchStatusResponse.Ongoing:
      return MatchStatus.LIVE;
    case MatchStatusResponse.Scheduled:
      return MatchStatus.PREPAIRING;
    default:
      return MatchStatus.FINISHED;
  }
};
