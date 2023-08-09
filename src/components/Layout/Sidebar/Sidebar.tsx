import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Sidebar = ({ ...props }: Props): JSX.Element => {
  return <div {...props}>Sidebar</div>;
};

export default Sidebar;
