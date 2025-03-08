import { AlertIcon } from "#shared/icons";
import { Alert } from "#shared/ui";
import { useTranslation } from "react-i18next";

const RefreshAlert = () => {
  const { t } = useTranslation();
  return <Alert icon={<AlertIcon />}>{t("refreshError")}</Alert>;
};

export default RefreshAlert;
