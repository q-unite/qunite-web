import { Token } from "../../../types/token";
import client from "../instance";
import { SignInBody } from "./types/SignInBody";
import { SignUpBody } from "./types/SignUpBody";

class AuthApi {
  async signUp(body: SignUpBody): Promise<void> {
    const { data } = await client.post<void>("/auth/sign-up", body);
    return data;
  }

  async signIn(body: SignInBody): Promise<Token> {
    const { data } = await client.post<Token>("/auth/sign-in", body);
    return data;
  }
}

export default new AuthApi();
