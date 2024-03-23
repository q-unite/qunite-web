import { To } from "react-router-dom";

export interface LinkProps {
  href: To;
  name: string;
  icon: "queues" | "dashboard" | "settings";
  styles: CSSModuleClasses;
  isHidden?: boolean;
}
