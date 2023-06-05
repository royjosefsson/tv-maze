import { Show } from "../interfaces/show"
import safeFetch from "../utils/safeFetch"

const TV_MAZE_URL = "https://api.tvmaze.com"

interface ApiResponse {
  show: Show
}

export const API = {
  tvmaze: {
    search: async (query: string): Promise<Show[]> => {
      const data: ApiResponse[] = await safeFetch(`${TV_MAZE_URL}/search/shows?q=${query}`)
      return data.map((x) => x.show)
    },
    show: async (id: string): Promise<Show> => {
      const data = await safeFetch(`${TV_MAZE_URL}/shows/${id}`)
      return data
    },
    cast: async (id: string) => {
      const data = await safeFetch(`${TV_MAZE_URL}/shows/${id}/cast`)
      return data
    }
  }
}