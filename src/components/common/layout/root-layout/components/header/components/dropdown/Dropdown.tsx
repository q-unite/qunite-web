import { lazy, Suspense, useRef, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

import { P } from "@/components/common/ui";
import Content from "./content";

import { useClickOutOfBlock } from "@/hooks";
import useAuth from "@/hooks/use-auth";

import styles from "./Dropdown.module.css";

const CreateQueueModal = lazy(
  () => import("@/components/common/shared/modals/CreateQueueModal")
);

const Dropdown = (): JSX.Element => {
  const { user } = useAuth();
  const [visible, setVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isShown, setIsShown] = useState(false);

  useClickOutOfBlock(dropdownRef, setVisible);

  return (
    <>
      <div ref={dropdownRef} className={styles.dropdown}>
        <div className={styles.user} onClick={() => setVisible(!visible)}>
          <P size="m" color="black">
            {user.username}
          </P>
          <IoChevronDownOutline size={16} color="#FF0065" />
        </div>
        <Content visible={visible} setIsShown={setIsShown} />
      </div>

      <Suspense fallback={null}>
        <CreateQueueModal isShown={isShown} setIsShown={setIsShown} />
      </Suspense>
    </>
  );
};

export default Dropdown;
