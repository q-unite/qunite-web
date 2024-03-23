import { useGetUser } from "../../../../hooks";
import { Htag } from "../../../common/ui";

export const CurrentUser = ({
  memberId,
}: {
  memberId: number;
}): JSX.Element => {
  const { data } = useGetUser(memberId);

  return (
    <Htag tag="h1" style={{ color: "var(--secondary)" }}>
      {data?.username}
    </Htag>
  );
};
