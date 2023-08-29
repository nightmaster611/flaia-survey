import axios from "axios";

export const backendInstance = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL })

export class BackendApis {
  static async createSurvey(data: Record<string, any>) {
    return backendInstance.post('surveys', { data })
  }
}