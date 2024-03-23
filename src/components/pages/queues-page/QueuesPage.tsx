import { useNavigate } from "react-router-dom";

import Queue from "@/components/common/ui/queue";
import { Grid } from "@/components/common/ui";

import { Queue as QueueType } from "@/types/queue";

interface QueuesPageProps {
  queues: QueueType[];
}

const QueuesPage: React.FC<QueuesPageProps> = ({ queues }): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Grid>
      {queues.map((item) => (
        <Queue
          id={item.id}
          name={item.name}
          key={item.id}
          onClick={() => navigate(`/queues/${item.id}`)}
        />
      ))}
    </Grid>
  );
};

export default QueuesPage;
