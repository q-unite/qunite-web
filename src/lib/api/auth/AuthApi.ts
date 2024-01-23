import client from "../instance";
import { SignUpBody } from "./types/SignUpBody";

class AuthApi {
  async signUp(body: SignUpBody): Promise<void> {
    const { data } = await client.post<void>("/auth/sign-up", body);
    return data;
  }
}

export default new AuthApi();
