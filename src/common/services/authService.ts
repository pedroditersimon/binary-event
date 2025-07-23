
import authApiService from "src/api/auth/authApiService";
import httpClient from "src/api/httpClient";

class AuthService {
    constructor() { }

    async login(email: string, password: string) {
        const res = await authApiService.login(email, password);

        const token = res.token;
        localStorage.setItem("token", token);

        httpClient.setBearerToken(token);
    }
}

const authService = new AuthService();
export default authService;