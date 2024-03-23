import { Grid } from "../../../UI";
import { Card, Text } from "../../UI";

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
