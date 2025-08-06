
export interface LoginResponse {
    "access_token": string,
    "refresh_token": string
}

export interface LoginArg {
    email: string,
    password: string
}