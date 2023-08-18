import { useRef, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

import { P } from "../../../UI";
import styles from "./Droppdown.module.css";
import { Content } from "./Content";
import { useGetMe, useClickOutOfBlock } from "../../../../hooks";
import { DroppdownModal } from "./DroppdownModal";

export const Droppdown = (): JSX.Element => {
  const [visible, setVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const user = useGetMe();
  const [isShown, setIsShown] = useState(false);

  useClickOutOfBlock(dropdownRef, setVisible);

  return (
    <>
      <div ref={dropdownRef} className={styles.droppdown}>
        <div className={styles.user} onClick={() => setVisible(!visible)}>
          <P size="m" color="black">
            {user.data?.username}
          </P>
          <IoChevronDownOutline size={16} color="#FF0065" />
        </div>
        <Content visible={visible} setIsShown={setIsShown} />
      </div>

      <DroppdownModal isShown={isShown} setIsShown={setIsShown} />
    </>
  );
};
