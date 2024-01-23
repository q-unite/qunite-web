import StorageUtil from "../../utils/StorageUtil";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getAuthorizationHeader = () => {
  return {
    headers: {
      Authorization: `Bearer ${StorageUtil.getAccessToken()}`,
    },
  };
};
