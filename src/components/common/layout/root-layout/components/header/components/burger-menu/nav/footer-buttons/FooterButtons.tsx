import React from "react";
import AuthService from "../../../../../../../../../../lib/services/auth";
import { Button } from "../../../../../../../../ui";
import styles from "./FooterButtons.module.css";

interface FooterButtonsProps {
  // eslint-disable-next-line no-unused-vars
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const FooterButtons: React.FC<FooterButtonsProps> = ({
  handleClick,
}): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <Button appearance="success" onClick={handleClick}>
        Create queue
      </Button>
      <Button appearance="danger" onClick={() => AuthService.logout()}>
        Log out
      </Button>
    </footer>
  );
};

export default FooterButtons;
