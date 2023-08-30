import { useParams } from "react-router-dom";
import { Member } from "../../../../interfaces/Member";
import { Button, Htag } from "../../../UI";
import { nextUserHandler } from "../../handlers";
import { CurrentUser } from "./CurrentUser";
import styles from "./QueueController.module.css";

interface Props {
  current: Member;
}

export const QueueController = ({ current }: Props): JSX.Element => {
  const { id } = useParams();

  return (
    <section className={styles.controller}>
      <div className={styles.body}>
        <Htag tag="h1">Current user:</Htag>
        {current ? (
          <CurrentUser memberId={current.memberId} />
        ) : (
          <Htag tag="h1" color="primary">
            {" "}
            Queue is emptu
          </Htag>
        )}
      </div>
      <footer className={styles.footer}>
        <Button
          appearance="success"
          onClick={() => nextUserHandler(id!, current.memberId)}
        >
          Next user
        </Button>
      </footer>
    </section>
  );
};
