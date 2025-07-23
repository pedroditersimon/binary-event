import type { LoginReq, LoginRes } from "src/api/auth/types/login";
import httpClient from "src/api/httpClient";

class AuthApiService {
    constructor() { }

    async login(email: string, password: string): Promise<LoginRes> {
        const req: LoginReq = { email, password };
        return await httpClient.post<LoginRes>("/login", req);
        // return new Promise(() => ({ token: "mocked_token" }));
    }
}

const authApiService = new AuthApiService();
export default authApiService;