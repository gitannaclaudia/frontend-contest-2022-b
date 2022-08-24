export interface User {
  id: number;
  name: string;
  email: string;
  password?: string;
  token: string;
}

export interface Authenticate {
  email: string;
  password: string;
}
