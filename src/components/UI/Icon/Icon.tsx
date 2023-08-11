import {
  IoAdd,
  IoChevronBack,
  IoLayersOutline,
  IoLogOutOutline,
  IoMenu,
  IoPencil,
  IoSettingsOutline,
  IoTrashOutline,
} from "react-icons/io5";

import { BiSolidDashboard } from "react-icons/bi";

import { IconProps } from "./Icon.props";

export const Icon = ({ icon, size = 16 }: IconProps): JSX.Element => {
  switch (icon) {
    case "arrow":
      return <IoChevronBack size={size} />;
    case "pencil":
      return <IoPencil size={size} />;
    case "plus":
      return <IoAdd size={size} />;
    case "trash":
      return <IoTrashOutline size={size} />;
    case "menu":
      return <IoMenu size={size} />;
    case "dashboard":
      return <BiSolidDashboard size={size} />;
    case "queues":
      return <IoLayersOutline size={size} />;
    case "logout":
      return <IoLogOutOutline size={size} />;
    case "settings":
      return <IoSettingsOutline size={size} />;
    default:
      return <></>;
  }
};
