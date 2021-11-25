import axios from 'axios'

export const apikey = 'AIzaSyA1vOYaRAU3dpj48FLXOrHd7u2FhwO5qfE'

export type GetBooksQueryParams = {
    q?: string | null
    key?: string | null
    filter?: string | null
    orderBy?: string | null
}

export type BookResponse = {
    kind: string,
    items: any [],
    totalItems: number,
}

export const bookApi = {
    getBooks: (payload: GetBooksQueryParams) => axios.get<BookResponse>('https://www.googleapis.com/books/v1/volumes?', {params: payload})
}