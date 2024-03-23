import styles from "./QueueDetailsPageSkeleton.module.css";
import { Flex, Grid } from "../../../UI";
import { Card, Text } from "../../UI";

const QueueDetailsPageSkeleton = (): JSX.Element => {
  const tempArr = [1, 2, 3, 4, 5];

  return (
    <Flex style={{ gap: "20px" }}>
      <Text />
      <Grid className={styles.grid}>
        <Card>
          <Text size="m" />
          <Text size="l" />
          <Text size="s" />
        </Card>
        <Flex style={{ gap: "20px" }}>
          {tempArr.map((card) => (
            <Card key={card}>
              <Text />
            </Card>
          ))}
        </Flex>
      </Grid>
    </Flex>
  );
};

export default QueueDetailsPageSkeleton;
