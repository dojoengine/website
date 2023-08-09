import React, { ReactNode, useCallback, useState } from "react";

export const Dropdown = ({ items, icon, ...props } : { items: any[], icon: ReactNode}) => {
  const [selected, setSelected] = useState({
    label: "EN",
    value: "en-US",
  });
  const [isOpen, setIsOpen] = useState(false);

  const onToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const selectItem = (item: any) => {
    setSelected(item);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center text-dojo-blue shadow-sm bg-dojo-blue-med hover:bg-dojo-red rounded-full p-2 font-bold"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={onToggleOpen}
        >
          <div className="px-2">
            {icon}
          </div>
          <div className="pr-2">{selected.label}</div>
        </button>
      </div>

      <div
        style={{
          width: "80px",
        }}
        className={`${
          !isOpen && "hidden"
        } absolute right-0 z-10 mt-2 origin-top-right rounded-xl bg-dojo-blue-med shadow-lg focus:outline-none overflow-hidden `}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="py-0" role="none">
          {items.map((item, idx) => {
            return (
              <a
                href="#"
                className="flex items-center text-dojo-blue font-bold text-right px-4 py-2 text-sm hover:bg-dojo-red"
                role="menuitem"
                tabIndex={-1}
                id={`menu-item-${idx}`}
                key={`menu-item-${idx}`}
                onClick={() => selectItem(item)}
              >
                <div className="mr-2">{item.icon}</div>
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
