import { Card, Text } from "@/components/common/ui/skeletons";
import { Grid } from "@/components/common/ui";

const QueuesPageSkeleton = (): JSX.Element => {
  const tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Grid>
      {tempArr.map((c) => (
        <Card key={c}>
          <Text />
        </Card>
      ))}
    </Grid>
  );
};

export default QueuesPageSkeleton;
