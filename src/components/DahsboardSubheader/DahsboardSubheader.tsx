import cn from "classnames";
import { Flex, Icon, P } from "../common/ui";
import styles from "./DahsboardSubheader.module.css";

interface Props {
  amount: number;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DahsboardSubheader = ({
  amount,
  isVisible,
  setIsVisible,
}: Props): JSX.Element => {
  return (
    <Flex
      direction="row"
      className={styles.subheader}
      onClick={() => setIsVisible(!isVisible)}
    >
      <P>Amount: {amount}</P>

      <button
        className={cn(styles.button, {
          [styles.active]: !isVisible,
        })}
      >
        <Icon icon="arrow" />
      </button>
    </Flex>
  );
};
