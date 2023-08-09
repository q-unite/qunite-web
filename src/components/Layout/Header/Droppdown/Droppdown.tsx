import { useEffect, useRef, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

import { P } from "../../../UI";
import styles from "./Droppdown.module.css";
import { Content } from "./Content";

export const Droppdown = (): JSX.Element => {
  const [visible, setVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // handling click outside of the droppdown to close it

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
