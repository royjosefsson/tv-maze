export const safeFetch = async (url: string) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message)
        }
        throw new Error('Unknown Error')
    }
}

export default safeFetch