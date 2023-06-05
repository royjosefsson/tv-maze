import { Show } from "../interfaces/show"
import safeFetch from "../utils/safeFetch"

const TV_MAZE_URL = "https://api.tvmaze.com"
const SLOW = false
const WAIT_TIME = 10_000

interface ApiResponse {
  show: Show
}

const waitForSomeTime = () => {
  return new Promise(resolve => {
    if(!SLOW) {
      return resolve("Resolve immediately")
    }

    setTimeout(() => {
      resolve('Resolve after some time');
    }, WAIT_TIME);
  });
}

export const API = {
  tvmaze: {
    search: async (query: string): Promise<Show[]> => {
      const data: ApiResponse[] = await safeFetch(`${TV_MAZE_URL}/search/shows?q=${query}`)
      await waitForSomeTime()
      return data.map((x) => x.show)
    },
    show: async (id: string): Promise<Show> => {
      const data = await safeFetch(`${TV_MAZE_URL}/shows/${id}`)
      await waitForSomeTime()
      return data
    },
    cast: async (id: string) => {
      const data = await safeFetch(`${TV_MAZE_URL}/shows/${id}/cast`)
      await waitForSomeTime()
      return data
    }
  }
}