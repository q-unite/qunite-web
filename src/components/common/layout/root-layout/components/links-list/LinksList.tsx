import { links } from "../../constants";
import styles from "./LinkList.module.css";
import Link from "./link";

interface LinkListProps {
  activeLinkStyles: CSSModuleClasses;
  isHidden?: boolean;
}

const LinksList: React.FC<LinkListProps> = ({
  activeLinkStyles,
  isHidden,
}): JSX.Element => {
  return (
    <div className={styles.flexContainer}>
      {links.map((link) => (
        <Link
          href={link.href}
          icon={link.icon}
          name={link.name}
          styles={activeLinkStyles}
          isHidden={isHidden}
          key={link.name}
        />
      ))}
    </div>
  );
};

export default LinksList;
