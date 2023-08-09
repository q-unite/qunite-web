import {
  IoAdd,
  IoChevronBack,
  IoMenu,
  IoPencil,
  IoTrashOutline,
} from "react-icons/io5";

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
    default:
      return <></>;
  }
};
