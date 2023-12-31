"use client";

import { useState } from "react";
import { useClientTranslation } from "../i18n/client";

export const CopyBlock = ({ lng }: { lng: string }) => {
  const command = "curl -L https://install.dojoengine.org | bash";

  const [copyToClipboard, copyResult] = useCopyToClipboard();

  const { t } = useClientTranslation(lng);

  return (
    <code
      style={{ maxWidth: "469px" }}
      className="relative flex flex-row w-full items-center bg-dojo-blue-400 hover:bg-dojo-blue-300 rounded p-3  pr-12 text-dojo-blue-800 text-xs lg:text-sm overflow-hidden font-bold cursor-pointer xs:w-full"
      onClick={() => copyToClipboard(command)}
    >
      <div className="w-full">
        <div
          className={`w-full text-center text-ellipsis whitespace-nowrap overflow-hidden ${
            copyResult !== null && "invisible"
          }`}
        >
          {command}
        </div>
        {copyResult?.state === "success" && (
          <div className="absolute top-3 w-full text-center">{t("copied_to_clipboard")}</div>
        )}
        {copyResult?.state === "error" && <div className="absolute top-3 w-full text-center">Error !</div>}
      </div>
      <div className="absolute right-3 self-center p-1  rounded ml-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-copy w-4  "
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      </div>
    </code>
  );
};

function useCopyToClipboard() {
  const [result, setResult] = useState<null | { state: "success" } | { state: "error" }>(null);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setResult({ state: "success" });
    } catch (e) {
      setResult({ state: "error" });
      throw e;
    } finally {
      // 👇 Show the result feedback for 2 seconds
      setTimeout(() => {
        setResult(null);
      }, 2000);
    }
  };

  // 👇 We want the result as a tuple
  return [copy, result] as const;
}
