import { useRef, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

import { P } from "../../../common/ui";
import styles from "./Droppdown.module.css";
import { Content } from "./Content";
import { useClickOutOfBlock } from "../../../../hooks";
import { CreateQueueModal } from "../../../Modals/CreateQueueModal";
import useAuth from "../../../../hooks/use-auth";

export const Droppdown = (): JSX.Element => {
  const { user } = useAuth();
  const [visible, setVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isShown, setIsShown] = useState(false);

  useClickOutOfBlock(dropdownRef, setVisible);

  return (
    <>
      <div ref={dropdownRef} className={styles.droppdown}>
        <div className={styles.user} onClick={() => setVisible(!visible)}>
          <P size="m" color="black">
            {user.username}
          </P>
          <IoChevronDownOutline size={16} color="#FF0065" />
        </div>
        <Content visible={visible} setIsShown={setIsShown} />
      </div>

      <CreateQueueModal isShown={isShown} setIsShown={setIsShown} />
    </>
  );
};
