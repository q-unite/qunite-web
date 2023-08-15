import cn from "classnames";

import { Htag } from "../../UI";
import styles from "./Sidebar.module.css";
import { SidebarProps } from "./Sidebar.props";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Htag tag="h1" color="primary">
        Welcome to the queued
      </Htag>
    </div>
  );
};
