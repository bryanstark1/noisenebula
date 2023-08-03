import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:4000"

export const getSongs = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/songs"
    )
    return todos
  } catch (error) {
    throw new Error('error')
  }
}