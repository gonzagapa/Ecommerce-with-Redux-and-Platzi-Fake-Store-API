
export interface LoginResponse {
    "access_token": string,
    "refresh_token": string
}

export interface LoginArg {
    email: string,
    password: string
}

export interface UserProfileArg {
    access_token:string
}
export interface UserProfileResponse {
    id: number,
    email: string,
    name: string,
    role: string, //TODO: add users's roles
    avatar: string
}