import sendRequest from "./send-request";
import * as UserModel from '../models/user';

const BASE_URL = '/users';

export async function signUp(userData: any): Promise<UserModel.User> {
  return sendRequest(BASE_URL, 'POST', userData);
};

export async function login(credentials: any): Promise<UserModel.User> {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
};