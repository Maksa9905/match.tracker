import { MatchList } from "#entities/match";
import { PageContainer } from "#shared/ui";
import { Header } from "#widgets/index.js";
import { useTranslation } from "react-i18next";

const MatchListPage = () => {
  const { t } = useTranslation();

  return (
    <PageContainer className="flex flex-col gap-5">
      <Header title={t("matchTracker")} />
      <MatchList />
    </PageContainer>
  );
};

export default MatchListPage;
