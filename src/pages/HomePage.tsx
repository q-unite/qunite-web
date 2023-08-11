import { Button, Htag, Li } from "../components/UI";

const HomePage = (): JSX.Element => {
  return (
    <>
      <Button appearance="danger" icon="menu" />
      <Button appearance="danger" icon="plus">
        Create queue
      </Button>
      <Htag tag="h1">Some black h1</Htag>
      <Htag tag="h2" color="gray">
        Some gray h2
      </Htag>
      <Htag tag="h2" color="primary">
        Some primary h2
      </Htag>
      <Li icon="queues">Queues</Li>
      <Li icon="queues" color="primary">
        Queues
      </Li>
    </>
  );
};

export default HomePage;
