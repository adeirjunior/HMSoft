import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { appWindow } from "@tauri-apps/api/window";

export default function Titlebar() {
  useEffect(() => {
    const minimizeButton = document.getElementById("titlebar-minimize");
    const maximizeButton = document.getElementById("titlebar-maximize");
    const closeButton = document.getElementById("titlebar-close");

    const handleMinimize = () => appWindow.minimize();
    const handleMaximize = () => appWindow.toggleMaximize();
    const handleClose = () => appWindow.close();

    minimizeButton!.addEventListener("click", handleMinimize);
    maximizeButton!.addEventListener("click", handleMaximize);
    closeButton!.addEventListener("click", handleClose);

    // Cleanup event listeners on component unmount
    return () => {
      minimizeButton?.removeEventListener("click", handleMinimize);
      maximizeButton?.removeEventListener("click", handleMaximize);
      closeButton?.removeEventListener("click", handleClose);
    };
  }, []);
  return (
    <div data-tauri-drag-region className={cn("h-[30px] select-none flex justify-end fixed top-0 z-50 inset-x-0 rounded-none bg-white/50 backdrop-blur-md px-4")}>
      <div className={cn("inline-flex justify-center items-center w-[30px] h-[30px] cursor-pointer hover:bg-slate-300")} id="titlebar-minimize">
        <img
          src="https://api.iconify.design/mdi:window-minimize.svg"
          alt="minimize"
        />
      </div>
      <div className={cn("inline-flex justify-center items-center w-[30px] h-[30px] cursor-pointer hover:bg-slate-300")} id="titlebar-maximize">
        <img
          src="https://api.iconify.design/mdi:window-maximize.svg"
          alt="maximize"
        />
      </div>
      <div className={cn("inline-flex justify-center items-center w-[30px] h-[30px] cursor-pointer hover:bg-slate-300")} id="titlebar-close">
        <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
      </div>
    </div>
  );
}