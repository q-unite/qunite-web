import { Button } from "../components/UI";
import HTag from "../components/UI/Htag/HTag";

const HomePage = (): JSX.Element => {
  return (
    <>
      <Button appearance="danger" icon="menu" />
      <Button appearance="danger" icon="plus">
        Create queue
      </Button>
      <HTag tag="h1">Some black h1</HTag>
      <HTag tag="h2" color="gray">
        Some gray h2
      </HTag>
      <HTag tag="h2" color="primary">
        Some primary h2
      </HTag>
    </>
  );
};

export default HomePage;
