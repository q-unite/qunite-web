import { Grid } from "@/components/common/ui";
import { Card, Text } from "@/components/common/ui/skeletons";

const QueuesListSkeleton = (): JSX.Element => {
  const arr = Array.from({ length: 9 }, (_, i) => i);

  return (
    <Grid>
      {arr.map((c) => (
        <Card key={c}>
          <Text />
        </Card>
      ))}
    </Grid>
  );
};

export default QueuesListSkeleton;
