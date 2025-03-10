import { RefreshIcon } from "#shared/icons";
import { Button } from "#shared/ui";
import { ButtonProps } from "#shared/ui";
import { useTranslation } from "react-i18next";
import Loader from "./Loader";
import { useLazyGetMatchesQuery } from "#entities/match";
import { useCallback } from "react";

export enum RefreshButtonState {
  IDLE = "IDLE",
  LOADING = "LOADING",
}

interface RefreshButtonProps extends Omit<ButtonProps, "children"> {
  state: RefreshButtonState;
}

const RefreshButton = ({ state, ...props }: RefreshButtonProps) => {
  const { t } = useTranslation();

  const [refetch, { isLoading, isFetching }] = useLazyGetMatchesQuery();

  const handleRefresh = useCallback(() => refetch(), [refetch]);

  return (
    <Button
      {...props}
      onClick={handleRefresh}
      icon={isLoading && isFetching ? Loader : RefreshIcon}
    >
      {t("refresh")}
    </Button>
  );
};

export default RefreshButton;
