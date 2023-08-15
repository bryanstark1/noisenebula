import sendRequest from "./send-request";

const BASE_URL = 'https://dry-beach-65126-6548e3961c52.herokuapp.com/users';

export async function signUp(userData: any): Promise<any> {
  return sendRequest(BASE_URL, 'POST', userData);
};

export async function login(credentials: any): Promise<any> {
  console.log(credentials)
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
};