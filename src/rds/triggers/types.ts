export type UsernamePassword = { username: string; password: string };

export type DatabaseCredentials = UsernamePassword & {
  host: string;
  port: number;
};
