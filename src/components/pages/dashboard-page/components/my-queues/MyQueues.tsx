import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Queue from "../../../../common/ui/queue";
import { Flex, Grid, Htag } from "../../../../common/ui";
import { Header } from "./Header";
import styles from "./MyQueues.module.css";
import MyQueueProps from "./MyQueue.props";
import { DahsboardSubheader } from "../../../../DahsboardSubheader/DahsboardSubheader";

const MyQueues = ({ myQueues }: MyQueueProps): JSX.Element => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  if (!myQueues) {
    return (
      <Htag tag="h1" color="primary">
        Some error on server
      </Htag>
    );
  }

  return (
    <Flex className={styles.myQueues}>
      <Header />

      <DahsboardSubheader
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        amount={myQueues.length}
      />

      {myQueues.length > 0 ? (
        isVisible && (
          <Grid>
            {myQueues.map((item) => (
              <Queue
                id={item.id}
                name={item.name}
                key={item.id}
                onClick={() => navigate(`/queues/${item.id}`)}
              />
            ))}
          </Grid>
        )
      ) : (
        <Htag tag="h2" color="primary">
          You haven't created any queues yet
        </Htag>
      )}
    </Flex>
  );
};

export default MyQueues;
