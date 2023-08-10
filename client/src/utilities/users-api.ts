import sendRequest from "./send-request";

const BASE_URL = 'http://localhost:4000/users';

export async function signUp(userData: any): Promise<any> {
  return sendRequest(BASE_URL, 'POST', userData);
};

export async function login(credentials: any): Promise<any> {
  console.log(credentials)
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
};