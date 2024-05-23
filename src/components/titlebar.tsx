import Image from 'next/image';
import styles from "./titlebar.module.css";
import { appWindow } from "@tauri-apps/api/window";
import { useEffect } from 'react';

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
        minimizeButton.removeEventListener("click", handleMinimize);
        maximizeButton.removeEventListener("click", handleMaximize);
        closeButton.removeEventListener("click", handleClose);
      };
    }, []);
  return (
    <div data-tauri-drag-region className={styles.titlebar}>
      <div className="titlebar-button" id="titlebar-minimize">
        <Image
          src="https://api.iconify.design/mdi:window-minimize.svg"
          alt="minimize"
        />
      </div>
      <div className={styles['titlebar-button']} id="titlebar-maximize">
        <Image
          src="https://api.iconify.design/mdi:window-maximize.svg"
          alt="maximize"
        />
      </div>
      <div className={styles['titlebar-button']} id="titlebar-close">
        <Image src="https://api.iconify.design/mdi:close.svg" alt="close" />
      </div>
    </div>
  );
}