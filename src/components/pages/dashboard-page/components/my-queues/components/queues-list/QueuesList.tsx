import { useNavigate } from "react-router-dom";

import { Grid, Htag } from "../../../../../../common/ui";
import Queue from "../../../../../../common/ui/queue";

import { Queue as QueueType } from "../../../../../../../types/queue";

interface QueueListProps {
  isVisible: boolean;
  myQueues: QueueType[];
}

const QueuesList = ({ isVisible, myQueues }: QueueListProps): JSX.Element => {
  const navigate = useNavigate();

  if (myQueues.length === 0) {
    return (
      <Htag tag="h2" color="primary">
        You haven't created any queues yet
      </Htag>
    );
  }

  if (isVisible) {
    return (
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
    );
  }

  return <></>;
};

export default QueuesList;
