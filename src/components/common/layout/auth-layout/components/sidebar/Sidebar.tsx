import cn from "classnames";

import { Htag, P } from "@/components/common/ui";
import styles from "./Sidebar.module.css";
import { SidebarProps } from "./Sidebar.props";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Htag tag="h1" color="primary">
        Welcome to the queued
      </Htag>
      <P color="black" size="s">
        Optimize Customer Flow with Our Intelligent Queue Management
      </P>
    </div>
  );
};
