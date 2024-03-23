import styles from "./Main.module.css";
import { Grid } from "../../common/ui";
import { MembersList, QueueController, Status } from "../components";
import { useContext } from "react";
import { QueueDetailsContext } from "../../../context/QueueDetailsContext";

export const Main = (): JSX.Element => {
  const { isMyQueue, isManager } = useContext(QueueDetailsContext);

  return (
    <Grid className={styles.grid}>
      {isMyQueue || isManager ? <QueueController /> : <Status />}
      <MembersList />
    </Grid>
  );
};
