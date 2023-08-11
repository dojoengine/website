"use client";

import React, { ReactNode, Suspense, useCallback, useState } from "react";
import Link from "next/link";

const LangageSelector = ({
  items,
  icon,
  t,
  lng,
  i18n,
  ...props
}: {
  items: any[];
  icon: ReactNode;
  t: any;
  lng: string;
  i18n: any;
}) => {
  const defaultItem = items.find((i) => i.value === i18n?.language) || {
    label: "EN",
    value: "en",
  };

  const [selected, setSelected] = useState(defaultItem);
  const [isOpen, setIsOpen] = useState(false);

  const onToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const selectItem = (item: any) => {
    setSelected(item);
    setIsOpen(false);
    i18n.changeLanguage(item.value);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center text-dojo-blue shadow-sm bg-dojo-blue-400 hover:bg-dojo-red rounded-full p-1 sm:p-2 font-bold"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={onToggleOpen}
        >
          <div className="px-1">{icon}</div>
          <div className="px-0 hidden md:block md:pr-2">
            {/* {selected.label} */}
            {lng.toUpperCase()}
          </div>
        </button>
      </div>

      <div
        style={{
          width: "80px",
        }}
        className={`${
          !isOpen && "hidden"
        } absolute right-0 z-10 mt-2 origin-top-right rounded-xl bg-dojo-blue-400 shadow-lg focus:outline-none overflow-hidden `}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="py-0" role="none">
          {items.map((item, idx) => {
            return (
              <Link
                href={`/${item.value}`}
                className={`flex justify-center text-dojo-blue font-bold  px-4 py-2 text-sm hover:bg-dojo-red ${
                  item.value === lng && "hidden"
                }`}
                role="menuitem"
                tabIndex={-1}
                id={`menu-item-${idx}`}
                key={`menu-item-${idx}`}
                onClick={() => selectItem(item)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LangageSelector;
