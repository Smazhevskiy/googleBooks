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
    totalItems: number,
    items: {
        kind: string,
        id: string,
        etag: string,
        selfLink: string,
        volumeInfo: {
            title: string,
            subtitle: string,
            authors: string [],
            publisher: string,
            publishedDate: any,
            description: string,
            industryIdentifiers: any,
            readingModes: any,
            pageCount: number,
            printType: string,
            categories: string [],
            maturityRating: string,
            allowAnonLogging: boolean,
            contentVersion: any,
            panelizationSummary: {},
            imageLinks: {
                smallThumbnail: string,
                thumbnail: string
            },
            language: string,
            previewLink: string,
            infoLink: string,
            canonicalVolumeLink: string
        },
        saleInfo: any,
        accessInfo: any,
        searchInfo: {
            textSnippet: string
        }
    }
}


export const bookApi = {
    getBooks: (payload: GetBooksQueryParams) => axios.get<BookResponse>('https://www.googleapis.com/books/v1/volumes?', {params: payload})
}