import styles from "./Main.module.css";
import { Grid } from "../../UI";
import { MembersList, Status } from "../components";
import { Member } from "../../../interfaces/Member";
import { User } from "../../../interfaces/User";

interface Props {
  members: Member[];
  me: User;
}

export const Main = ({ members, me }: Props): JSX.Element => {
  return (
    <Grid className={styles.grid}>
      <Status me={me} />
      <MembersList members={members} />
    </Grid>
  );
};
