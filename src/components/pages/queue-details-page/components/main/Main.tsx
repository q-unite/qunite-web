import { Grid } from "@/components/common/ui";
import { MembersList, QueueController, Status } from "../components";

import useQueue from "@/hooks/use-queue";

import styles from "./Main.module.css";

const Main = (): JSX.Element => {
  const { isMyQueue, isManager } = useQueue();

  return (
    <Grid className={styles.grid}>
      {isMyQueue || isManager ? <QueueController /> : <Status />}
      <MembersList />
    </Grid>
  );
};

export default Main;
