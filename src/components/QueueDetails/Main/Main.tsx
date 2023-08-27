import styles from "./Main.module.css";
import { Grid, Htag } from "../../UI";
import { MembersList, Status } from "../components";
import { useGetQueueMembers } from "../../../hooks";

interface Props {
  id: number;
}

export const Main = ({ id }: Props): JSX.Element => {
  const { data } = useGetQueueMembers(id);

  if (!data) {
    return (
      <Htag tag="h1" color="primary">
        Some error
      </Htag>
    );
  }

  return (
    <Grid className={styles.grid}>
      <Status />
      <MembersList members={data} />
    </Grid>
  );
};
