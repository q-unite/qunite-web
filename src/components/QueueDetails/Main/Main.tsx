import styles from "./Main.module.css";
import { Grid } from "../../UI";
import { MembersList, Status } from "../components";
import { Member } from "../../../interfaces/Member";

interface Props {
  members: Member[];
}

export const Main = ({ members }: Props): JSX.Element => {
  return (
    <Grid className={styles.grid}>
      <Status />
      <MembersList members={members} />
    </Grid>
  );
};
