"use client";

import LangageSelectorBase from "./LangageSelectorBase";
import { useClientTranslation } from "../../i18n/client";
import { ReactNode } from "react";

export const LangageSelector = ({ items, icon, lng, ...props }: { items: any[]; icon: ReactNode; lng: string }) => {
  const { t, i18n } = useClientTranslation(lng);
  return <LangageSelectorBase items={items} icon={icon} t={t} lng={lng} i18n={i18n} {...props} />;
};
