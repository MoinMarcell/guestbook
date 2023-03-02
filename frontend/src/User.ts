export type User = {
    id?: string,
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    role?: "USER" | "ADMIN",
}