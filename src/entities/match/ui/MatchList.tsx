import { Loader } from "#features/fetching-matchs/index.js";
import { useGetMatchesQuery } from "#entities/match";
import MatchListItem from "./MatchListItem";

const MatchList = () => {
  const {
    data,
    isFetching,
    isLoading: isLoadingMatches,
  } = useGetMatchesQuery();

  const isLoading = isLoadingMatches || isFetching;

  return (
    <div className={`flex flex-col gap-3 ${isLoading ? "opacity-40" : ""}`}>
      {data?.map((match) => (
        <MatchListItem
          homeCommand={match.homeCommand}
          awayCommand={match.awayCommand}
          score={match.score}
          status={match.status}
        />
      ))}
      {isLoading && <Loader size={60} className="absolute top-1/2 left-1/2" />}
    </div>
  );
};

export default MatchList;
