import { WindowControls } from "#components";
import { locations } from "#constants";
import windowWrapper from "#hoc/windowWrapper";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import clsx from "clsx";
import { Search } from "lucide-react";
import React from "react";

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();
  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "blank");

    openWindow(`${item.fileType}${item.kind}`, item);
  };
  const renderList = (name, items) => (
    <div>
      <h3 className="text-xs font-medium text-gray-400 mb-1">{name}</h3>
      <ul className="space-y-1">
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
              item.id === activeLocation.id
                ? "bg-blue-100 text-blue-700 flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-colors"
                : "text-gray-700 hover:bg-gray-200 flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-colors"
            )}
          >
            <img src={item.icon} className="w-4" alt={item.name} />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div className="w-full h-[500px] flex flex-col shadow-2xl drop-shadow-2xl overflow-hidden rounded-xl">
        <div id="window-header">
          <WindowControls target="finder" />
          <Search className="icon" />
        </div>
        <div className="bg-white flex h-full">
          <div className="sidebar w-48 bg-gray-50 border-r border-gray-200 flex flex-col p-5 space-y-3">
            <div>{renderList("Favourites", Object.values(locations))}</div>
          </div>
          <ul className="content flex-1 p-8 bg-white max-w-2xl relative">
            {activeLocation?.children?.map((item) => (
              <li
                key={item.id}
                className={`absolute flex items-center flex-col gap-3 ${item.position}`}
                onClick={() => openItem(item)}
              >
                <img
                  className="object-contain object-center size-16 relative group-hover:scale-105"
                  src={item.icon}
                  alt={item.name}
                />
                <p className=" text-sm text-center font-medium w-40">
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
const FinderWindow = windowWrapper(Finder, "finder");
export default FinderWindow;
