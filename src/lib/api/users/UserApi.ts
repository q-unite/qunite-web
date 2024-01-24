import { User } from "../../../types/user";
import client from "../instance";
import { getAuthorizationHeader } from "../utils/getAuthorizationHeader";

class UserApi {
  async getMe(): Promise<User> {
    const { data } = await client.get<User>(
      "/users/self",
      getAuthorizationHeader()
    );
    return data;
  }

  async getUserById(id: string): Promise<User> {
    const { data } = await client.get<User>(
      `/users/${id}`,
      getAuthorizationHeader()
    );
    return data;
  }
}

export default new UserApi();
