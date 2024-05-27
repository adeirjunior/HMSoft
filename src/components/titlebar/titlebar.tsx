"use client"

import styles from "./titlebar.module.css";
import { Button, ButtonGroup } from '@nextui-org/button';
import { Image } from "@nextui-org/image";
import { cn } from "@/lib/utils";

export default function Titlebar() {
 
  return (
      <div data-tauri-drag-region className={cn(styles.titlebar, "rounded-none bg-white/50 backdrop-blur-md px-4")}>
        <ButtonGroup>
          <Button
            className={styles["titlebar-button"]}
          >
            <Image
              width={16}
              height={16}
              src="https://api.iconify.design/mdi:window-minimize.svg"
              alt="minimize"
            />
          </Button>
          <Button
            className={styles["titlebar-button"]}
          >
            <Image
              width={16}
              height={16}
              src="https://api.iconify.design/mdi:window-maximize.svg"
              alt="maximize"
            />
          </Button>
          <Button className={styles["titlebar-button"]}>
            <Image
              width={16}
              height={16}
              src="https://api.iconify.design/mdi:close.svg"
              alt="close"
            />
          </Button>
        </ButtonGroup>
      </div>
  );
}