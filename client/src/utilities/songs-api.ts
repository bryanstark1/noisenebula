import axios, { AxiosResponse } from "axios";

const BASE_URL: string = "http://localhost:4000";

export const getSongs = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const songs: AxiosResponse<ApiDataType> = await axios.get(
      BASE_URL + "/songs"
    )
    return songs
  } catch (error) {
    throw new Error('error')
  }
};