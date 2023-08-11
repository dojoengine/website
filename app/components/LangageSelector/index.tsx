import { ReactNode } from "react";
import { useTranslation } from "../../i18n";
import LangageSelectorBase from "./LangageSelectorBase";

export const LangageSelector = async ({
  items,
  icon,
  lng,
  ...props
}: {
  items: any[];
  icon: ReactNode;
  lng: string;
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t, i18n } = await useTranslation(lng);
  return <LangageSelectorBase items={items} icon={icon} t={t} lng={lng} i18n={i18n} {...props} />;
};
