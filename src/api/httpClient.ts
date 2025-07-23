
export class HttpClient {
    private baseUrl: string;
    private bearerToken?: string;

    constructor(baseUrl: string, token?: string) {
        this.baseUrl = baseUrl;
        this.bearerToken = token;
    }

    setBearerToken(token: string) {
        this.bearerToken = token;
    }

    async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
        const res = await fetch(`${this.baseUrl}${endpoint}`, {
            ...options,
            headers: {
                ...options.headers,
                ...(this.bearerToken && { 'Authorization': `Bearer ${this.bearerToken}` }),
            },
        });
        if (res.ok) return (await res.json()) as T;
        return Promise.reject({ status: res.status, statusText: res.statusText });
    }

    async get<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
        return this.request<T>(endpoint, { ...options, method: 'GET' });
    }

    async post<T>(endpoint: string, body: unknown, options: RequestInit = {}): Promise<T> {
        return this.request<T>(endpoint, {
            ...options,
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            }
        });
    }

    async put<T>(endpoint: string, body: Record<string, unknown>, options: RequestInit = {}): Promise<T> {
        return this.request<T>(endpoint, {
            ...options,
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            }
        });
    }

    async delete<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
        return this.request<T>(endpoint, { ...options, method: 'DELETE' });
    }

    async patch<T>(endpoint: string, body: Record<string, unknown>, options: RequestInit = {}): Promise<T> {
        return this.request<T>(endpoint, {
            ...options,
            method: 'PATCH',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            }
        });
    }
}

const httpClient = new HttpClient(import.meta.env.VITE_API_URL);

export default httpClient;