import Skeleton from "../../../../../ui/Skeleton";

const Loading = (): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Skeleton height={50} width={100} />
    </div>
  );
};

export default Loading;
