import { Command, CommandInfo, CommandLogo } from "#entities/command";
import { ArrowDownOutlinedIcon } from "#shared/icons";
import { Card, IconButton } from "#shared/ui";
import { useState } from "react";
import { MatchStatus } from "../model";
import StatusCard from "./StatusCard";

type MatchListItemProps = {
  homeCommand: Command;
  awayCommand: Command;
  score: string;
  status: MatchStatus;
};

const MatchListItem = ({
  homeCommand,
  awayCommand,
  score,
  status,
}: MatchListItemProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const gridStyles = `grid grid-cols-[1fr_auto_auto] ${
    expanded ? "grid-rows-[auto_1fr] gap-y-8" : "grid-rows-1"
  }`;

  return (
    <Card className={`${gridStyles} items-center gap-3`}>
      <div className="flex justify-between">
        <CommandLogo logoUrl={homeCommand.logoUrl} name={homeCommand.name} />
        <StatusCard score={score} status={status} />
        <CommandLogo
          logoUrl={homeCommand.logoUrl}
          name={awayCommand.name}
          position="right"
        />
      </div>
      <IconButton onClick={handleExpand}>
        <ArrowDownOutlinedIcon rotate={expanded ? 180 : 0} />
      </IconButton>
      {expanded && (
        <div className="row-start-2 col-span-2 flex gap-8">
          <CommandInfo {...homeCommand.statistics} />
          <CommandInfo {...awayCommand.statistics} />
        </div>
      )}
    </Card>
  );
};

export default MatchListItem;
