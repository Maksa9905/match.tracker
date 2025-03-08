import { useGetMatchesQuery } from "#entities/match/api/api.js";
import {
  RefreshAlert,
  RefreshButton,
  RefreshButtonState,
} from "#features/fetching-matchs";

export type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  const { error } = useGetMatchesQuery();

  return (
    <div className="flex justify-between">
      <h1 className="text-logo italic font-bold font-tactic text-white">
        {title}
      </h1>
      <div className="flex gap-3">
        {error && <RefreshAlert />}
        <RefreshButton state={RefreshButtonState.IDLE} />
      </div>
    </div>
  );
};

export default Header;
