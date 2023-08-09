import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Header = ({ ...props }: Props): JSX.Element => {
  return <div {...props}>Header</div>;
};

export default Header;
