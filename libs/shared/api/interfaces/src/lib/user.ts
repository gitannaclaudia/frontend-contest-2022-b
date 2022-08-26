export interface User {
  id?: number;
  name?: string;
  email: string;
  password?: string;
}

export interface authUser {
  id: number;
  email: string;
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

export enum ModalEventModel {
  SAVE = 'MODAL_SAVE',
  CANCEL = 'MODAL_CANCEL',
  CLOSE = 'MODAL_CLOSE',
}
