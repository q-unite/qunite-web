import { Button, Htag } from "../../../UI";
import { CurrentUser } from "./CurrentUser";
import styles from "./QueueController.module.css";
import { useContext } from "react";
import { QueueDetailsContext } from "../../../../context/QueueDetailsContext";
import QueueApi from "../../../../lib/api/queue/QueueApi";

export const QueueController = (): JSX.Element => {
  const data = useContext(QueueDetailsContext);

  return (
    <section className={styles.controller}>
      <div className={styles.body}>
        {data.members[0] ? (
          <>
            <Htag tag="h1">Current user:</Htag>
            <CurrentUser memberId={data.members[0].memberId} />
          </>
        ) : (
          <Htag tag="h1" color="primary">
            {" "}
            Queue is empty
          </Htag>
        )}
      </div>
      {data.members[0] && (
        <footer className={styles.footer}>
          <Button
            appearance="success"
            onClick={() =>
              QueueApi.deleteMemberFromQueue(
                data.id.toString(),
                data.members[0].memberId.toString()
              )
            }
          >
            Next user
          </Button>
        </footer>
      )}
    </section>
  );
};
