import styles from "./Main.module.css";
import { Grid } from "../../UI";
import { MembersList, QueueController, Status } from "../components";
import { useContext } from "react";
import { QueueDetailsContext } from "../../../context/QueueDetailsContext";

export const Main = (): JSX.Element => {
  const data = useContext(QueueDetailsContext);

  return (
    <Grid className={styles.grid}>
      {data.isMyQueue || data.isManager ? <QueueController /> : <Status />}
      <MembersList />
    </Grid>
  );
};
