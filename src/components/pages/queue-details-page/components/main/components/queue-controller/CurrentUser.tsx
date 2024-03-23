import { Htag } from "@/components/common/ui";
import { useQuery } from "@tanstack/react-query";
import UserApi from "@/lib/api/users/UserApi";

export const CurrentUser = ({
  memberId,
}: {
  memberId: string;
}): JSX.Element => {
  const { data } = useQuery({
    queryKey: ["user", memberId],
    queryFn: () => UserApi.getUserById(memberId),
    refetchOnWindowFocus: false,
    retry: false,
  });

  return (
    <Htag tag="h1" style={{ color: "var(--secondary)" }}>
      {data?.username}
    </Htag>
  );
};
