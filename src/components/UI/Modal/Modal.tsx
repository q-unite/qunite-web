import { useRef } from "react";
import cn from "classnames";
import { IoClose } from "react-icons/io5";
import styles from "./Modal.module.css";
import { ModalProps } from "./Modal.props";
import { Button, Htag } from "..";
import { useClickOutOfBlock } from "../../../hooks";

export const Modal = ({
  isShown,
  title,
  children,
  successButtonText,
  successButtonClick,
  dangerButtonText,
  dangerButtonClick,
  setIsShown,
}: ModalProps): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutOfBlock(ref, setIsShown);

  return (
    <section
      className={cn(styles.modal, {
        [styles.hidden]: !isShown,
      })}
    >
      <div className={styles.modalContainer} ref={ref}>
        <header className={styles.modalHeader}>
          <Htag tag="h1" color="black">
            {title}
          </Htag>
          <button
            className={styles.closeButton}
            onClick={() => setIsShown(!isShown)}
          >
            <IoClose size={24} color={"var(--gray)"} />
          </button>
        </header>
        <div className={styles.modalBody}>{children}</div>
        <footer className={styles.modalFooter}>
          <Button appearance="success" onClick={successButtonClick}>
            {successButtonText}
          </Button>
          <Button appearance="danger" onClick={dangerButtonClick}>
            {dangerButtonText}
          </Button>
        </footer>
      </div>
    </section>
  );
};
