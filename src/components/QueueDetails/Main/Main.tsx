import styles from "./Main.module.css";
import { Grid } from "../../UI";
import { MembersList, QueueController, Status } from "../components";
import { Member } from "../../../interfaces/Member";
import { User } from "../../../interfaces/User";

interface Props {
  members: Member[];
  me: User;
  isMyQueue: boolean;
}

export const Main = ({ members, me, isMyQueue }: Props): JSX.Element => {
  return (
    <Grid className={styles.grid}>
      {isMyQueue ? (
        <QueueController current={members[0]} />
      ) : (
        <Status me={me} />
      )}
      <MembersList members={members} />
    </Grid>
  );
};
