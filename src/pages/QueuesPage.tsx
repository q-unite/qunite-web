import { useNavigate } from "react-router-dom";
import { Queue } from "../components/Queue/Queue";
import { Grid } from "../components/UI";
import { useGetQueues } from "../hooks";
import { useEffect } from "react";
import useQueuesStore from "../stores/queues-store";

const QueuesPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { data } = useGetQueues();
  const setQueues = useQueuesStore((q) => q.setQueues);
  const queues = useQueuesStore((q) => q.queues);

  useEffect(() => {
    if (data) {
      setQueues(data);
    }
  }, [setQueues, data]);

  return (
    <Grid>
      {queues.map((item) => (
        <Queue
          name={item.name}
          key={item.id}
          onClick={() => navigate(`/queues/${item.id}`)}
        />
      ))}
    </Grid>
  );
};

export default QueuesPage;
