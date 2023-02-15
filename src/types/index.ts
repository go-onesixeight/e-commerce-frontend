import { firebase } from "../firebase/config";

export type AuthUser = firebase.User;

export type SignupData = {
  username: string;
  email: string;
  password: string;
};
