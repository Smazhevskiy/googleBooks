import {bookApi, BookResponse, GetBooksQueryParams} from '../api/bookApi'
import {AppDispatch, RootState} from './store'


enum PACKS_ACTIONS_TYPES {
    SET_BOOKS = 'BOOKS/SET_BOOKS',
    SET_Q_VALUE = 'BOOKS/SET_Q_VALUE',
    SET_FILTER = 'BOOKS/SET_FILTER',
    SET_ORDER_BY = 'BOOKS/SET_ORDER_BY',
    SET_CATEGORIES = 'SET_CATEGORIES'
}

export type BooksActionsTypes =
    | ReturnType<typeof setBooks>
    | ReturnType<typeof setQValueSearch>
    | ReturnType<typeof setFilter>
    | ReturnType<typeof setOrderBy>
    | ReturnType<typeof setCategories>

export type BooksInitialState = BookResponse & {
    q: string | null
    apikey: string
    filter: string
    orderBy: string
    categories: string
}

export const initialState: BooksInitialState = {
    kind: 'some',
    totalItems: 10,
    items:   {
        "kind": "books#volume",
        "id": "BlQ-EAAAQBAJ",
        "etag": "sokZfJtNwk8",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/BlQ-EAAAQBAJ",
        "volumeInfo": {
            "title": "Political Dissent and Democratic Remittances",
            "subtitle": "The Activities of Russian Migrants in Europe",
            "authors": [
                "Joanna Fomina"
            ],
            "publisher": "Routledge",
            "publishedDate": "2021-10-25",
            "description": "With a focus on the most recent wave of political emigration from Russia unleashed during President Vladimir Putin’s third term, this book explores the activities of those who voice political dissent after leaving their country. Based on rich ethnographic data and interviews gathered among Russian emigrants to the EU member-states, who are engaged in civic and political participation targeted at their home country, it demonstrates that emigration, particularly forced emigration in which political dissidents are squeezed out of their country, no longer functions efficiently as a means of calming political unrest. Drawing on the concept of social remittances, the author analyses the content, structure and the channels of political democratic remittances sent by political dissidents overseas, the factors that shape them and the perceived effects of these endeavours. A study of the latest wave of politically charged emigration from Russia and emigrants’ engagement in ‘homeland politics’, this volume will appeal to scholars across a range of social sciences working on migration, diaspora and democratisation processes, citizenship, EU studies and Russia studies.",
            "industryIdentifiers": [
                {
                    "type": "ISBN_13",
                    "identifier": "9781000479669"
                },
                {
                    "type": "ISBN_10",
                    "identifier": "1000479668"
                }
            ],
            "readingModes": {
                "text": true,
                "image": true
            },
            "pageCount": 240,
            "printType": "BOOK",
            "categories": [
                "Social Science"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "0.1.1.0.preview.3",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=BlQ-EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=BlQ-EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.fr/books?id=BlQ-EAAAQBAJ&pg=PP1&dq=russian&hl=&as_brr=6&cd=1&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=BlQ-EAAAQBAJ&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=BlQ-EAAAQBAJ"
        },
        "saleInfo": {
            "country": "FR",
            "saleability": "FOR_SALE",
            "isEbook": true,
            "listPrice": {
                "amount": 39.02,
                "currencyCode": "EUR"
            },
            "retailPrice": {
                "amount": 28.05,
                "currencyCode": "EUR"
            },
            "buyLink": "https://play.google.com/store/books/details?id=BlQ-EAAAQBAJ&rdid=book-BlQ-EAAAQBAJ&rdot=1&source=gbs_api",
            "offers": [
                {
                    "finskyOfferType": 1,
                    "listPrice": {
                        "amountInMicros": 39020000,
                        "currencyCode": "EUR"
                    },
                    "retailPrice": {
                        "amountInMicros": 28050000,
                        "currencyCode": "EUR"
                    },
                    "giftable": true
                }
            ]
        },
        "accessInfo": {
            "country": "FR",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.fr/books/download/Political_Dissent_and_Democratic_Remitta-sample-epub.acsm?id=BlQ-EAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "pdf": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.fr/books/download/Political_Dissent_and_Democratic_Remitta-sample-pdf.acsm?id=BlQ-EAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "webReaderLink": "http://play.google.com/books/reader?id=BlQ-EAAAQBAJ&hl=&as_brr=6&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "With a focus on the most recent wave of political emigration from Russia unleashed during President Vladimir Putin’s third term, this book explores the activities of those who voice political dissent after leaving their country."
        }
    },
    q: 'js',
    apikey: 'AIzaSyA1vOYaRAU3dpj48FLXOrHd7u2FhwO5qfE',
    filter: 'full',
    orderBy: 'relevance',
    categories: 'all'
}


export const booksReducer = (state: BooksInitialState = initialState, action: BooksActionsTypes): BooksInitialState => {
    switch (action.type) {
        case PACKS_ACTIONS_TYPES.SET_BOOKS:
            return {...state, ...action.payload}
        case PACKS_ACTIONS_TYPES.SET_Q_VALUE:
            return {...state, q: action.q}
        case PACKS_ACTIONS_TYPES.SET_FILTER:
            return {...state, filter: action.filter}
        case PACKS_ACTIONS_TYPES.SET_ORDER_BY:
            return {...state, orderBy: action.orderBy}


        default:
            return state
    }
}


//ACTIONS
export const setBooks = (payload: BookResponse) => ({
    type: PACKS_ACTIONS_TYPES.SET_BOOKS,
    payload
} as const)

export const setQValueSearch = (q: string) => ({
    type: PACKS_ACTIONS_TYPES.SET_Q_VALUE,
    q
} as const)

export const setFilter = (filterBooks: 'free-ebooks' | 'paid-ebooks' | 'full' | 'partial' | 'ebooks') => ({
    type: PACKS_ACTIONS_TYPES.SET_FILTER,
    filter: filterBooks
} as const)

export const setOrderBy = (orderBy: 'relevance' | 'newest') => ({
    type: PACKS_ACTIONS_TYPES.SET_ORDER_BY,
    orderBy
} as const)

export const setCategories = (categories: 'all' | 'art' | 'biography' | 'computers' | 'history' | 'medical' | 'poetry') => ({
    type: PACKS_ACTIONS_TYPES.SET_CATEGORIES,
    categories
} as const)



//THUNKS
export const fetchBooks = (payload?: GetBooksQueryParams) => async (dispatch: AppDispatch, getState: () => RootState) => {
    const books = getState().books
    try {
        const response = await bookApi.getBooks({
            q: books.q,
            // apikey: books.apikey,
            // filter: books.filter,
            // orderBy: books.orderBy
        })
        dispatch(setBooks(response.data))
        console.log(response.data)
    } catch (e) {
        console.log(e)
    } finally {
        console.log('fetch end')
    }
}

