import { To } from "react-router-dom";

export interface NavbarItemProps {
  icon: "queues" | "dashboard" | "settings";
  name: string;
  href: To;
  isHidden: boolean;
  styles: CSSModuleClasses;
}
