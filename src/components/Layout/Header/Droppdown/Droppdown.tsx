import { useRef, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

import { P } from "../../../UI";
import styles from "./Droppdown.module.css";
import { Content } from "./Content";
import { useClickOutOfBlock } from "../../../../hooks/useClickOutOfBlock";

export const Droppdown = (): JSX.Element => {
  const [visible, setVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useClickOutOfBlock(dropdownRef, setVisible);

  return (
    <div ref={dropdownRef} className={styles.droppdown}>
      <div className={styles.user} onClick={() => setVisible(!visible)}>
        <P size="m" color="black">
          Denlich
        </P>
        <IoChevronDownOutline size={16} color="#FF0065" />
      </div>
      <Content visible={visible} />
    </div>
  );
};
