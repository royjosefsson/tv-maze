export interface Show {
    id: number,
    image?: {
        medium: string,
        original: string,
    },
    name: string,
    rating: {
        average: number
    },
    genres: string[],
    summary: string
}

export interface Cast {
    person: {
        name: string,
        image?: {
            medium: string,
            original: string,
        }
    },
    character: {
        id: number,
        name: string
    }
}