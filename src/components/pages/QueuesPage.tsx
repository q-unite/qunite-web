import { useNavigate } from "react-router-dom";
import { Queue } from "../Queue/Queue";
import { Grid } from "../common/ui";
import { useGetQueues } from "../../hooks";
import { useEffect } from "react";
import useQueuesStore from "../../stores/queues-store";
import QueuesPageSkeleton from "../Skeletons/SkeletonPages/QueuesPageSkeleton/QueuesPageSkeleton";

const QueuesPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetQueues();
  const setQueues = useQueuesStore((q) => q.setQueues);
  const queues = useQueuesStore((q) => q.queues);

  useEffect(() => {
    if (data) {
      setQueues(data);
    }
  }, [setQueues, data]);

  if (isLoading) {
    return <QueuesPageSkeleton />;
  }

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
