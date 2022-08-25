export interface User {
  id: number;
  name?: string;
  email: string;
  password?: string;
}

export interface Authenticate {
  email: string;
  password: string;
}

export interface Login {
  access_token: string;
}

export interface Profile {
  userId: number;
  userEmail: string;
}
