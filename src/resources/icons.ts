import type { IconType } from "react-icons";
import { HiAtSymbol, HiCursorArrowRipple, HiOutlineHome, HiOutlineRocketLaunch } from "react-icons/hi2";

export const iconLibrary: Record<string, IconType> = {
  rocket: HiOutlineRocketLaunch,
  home: HiOutlineHome,
  at: HiAtSymbol,
  cursor: HiCursorArrowRipple
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
