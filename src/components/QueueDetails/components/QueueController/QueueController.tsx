import { Button, Htag } from "../../../common/ui";
import { CurrentUser } from "./CurrentUser";
import styles from "./QueueController.module.css";
import { useContext } from "react";
import { QueueDetailsContext } from "../../../../context/QueueDetailsContext";
import QueueApi from "../../../../lib/api/queue/QueueApi";

export const QueueController = (): JSX.Element => {
  const { id, members } = useContext(QueueDetailsContext);

  return (
    <section className={styles.controller}>
      <div className={styles.body}>
        {members[0] ? (
          <>
            <Htag tag="h1">Current user:</Htag>
            <CurrentUser memberId={members[0].memberId} />
          </>
        ) : (
          <Htag tag="h1" color="primary">
            {" "}
            Queue is empty
          </Htag>
        )}
      </div>
      {members[0] && (
        <footer className={styles.footer}>
          <Button
            appearance="success"
            onClick={() =>
              QueueApi.deleteMemberFromQueue(id, members[0].memberId.toString())
            }
          >
            Next user
          </Button>
        </footer>
      )}
    </section>
  );
};
