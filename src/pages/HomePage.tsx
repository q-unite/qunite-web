import { Button } from "../components/UI";

const HomePage = (): JSX.Element => {
  return (
    <>
      <Button appearance="danger" icon="menu" />
      <Button appearance="danger" icon="plus">
        Create queue
      </Button>
    </>
  );
};

export default HomePage;
