import type { IconType } from "react-icons";
import { HiAtSymbol, HiCursorArrowRipple, HiOutlineHome, HiOutlineRocketLaunch, HiOutlineEnvelope} from "react-icons/hi2";
import {FaGithub, FaLinkedin, FaYoutube, } from "react-icons/fa"

export const iconLibrary: Record<string, IconType> = {
  rocket: HiOutlineRocketLaunch,
  home: HiOutlineHome,
  at: HiAtSymbol,
  cursor: HiCursorArrowRipple,
  github: FaGithub,
  linkedin: FaLinkedin,
  youtube: FaYoutube,
  email: HiOutlineEnvelope
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
