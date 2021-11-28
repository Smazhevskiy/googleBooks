import {bookApi, BookResponse, GetBooksQueryParams} from '../api/bookApi'
import {AppDispatch, RootState} from './store'
import {setAppError, setAppInfo, setAppIsLoading} from './app-reducer'
import {errorsHandler} from '../utils/errors'


enum PACKS_ACTIONS_TYPES {
    SET_BOOKS = 'BOOKS/SET_BOOKS',
    SET_Q_VALUE = 'BOOKS/SET_Q_VALUE',
    SET_FILTER = 'BOOKS/SET_FILTER',
    SET_ORDER_BY = 'BOOKS/SET_ORDER_BY',
    SET_CATEGORIES = 'BOOK/SET_CATEGORIES',
    SET_START_PAGINATION_INDEX = 'SET_START_PAGINATION_INDEX'
}

export type BooksActionsTypes =
    | ReturnType<typeof setBooks>
    | ReturnType<typeof setQValueSearch>
    | ReturnType<typeof setFilter>
    | ReturnType<typeof setOrderBy>
    | ReturnType<typeof setCategories>
    | ReturnType<typeof setStartPaginationIndex>


export type ItemsType = [{
    id: string
    volumeInfo: {
        authors: string []
        categories: string [],
        imageLinks: {
            smallThumbnail?: string | undefined | null,
            thumbnail?: string | undefined | null
            medium?: string | undefined | null
            large?: string | undefined | null
        },
        title?: string,
    }
}]

export type BooksInitialStateType = {
    kind: string
    totalItems: number
    items: ItemsType
    q: string
    key: string
    filter: string
    orderBy: string
    categories: string
    maxResults: number
    startIndex: number
}

export const initialState: BooksInitialStateType = {
    kind: 'some',
    totalItems: 0,
    items: [{
        id: '1',
        volumeInfo: {
            imageLinks: {
                smallThumbnail: '',
                thumbnail: '',
                medium: '',
                large: ''
            },
            categories: [],
            authors: [],
            title: ''

        }
    }],
    q: '',
    key: 'AIzaSyA1vOYaRAU3dpj48FLXOrHd7u2FhwO5qfE',
    filter: 'full',
    orderBy: 'relevance',
    categories: 'all',
    maxResults: 30,
    startIndex: 0,
}


export const booksReducer = (state: BooksInitialStateType = initialState, action: BooksActionsTypes): BooksInitialStateType => {
    switch (action.type) {
        case PACKS_ACTIONS_TYPES.SET_BOOKS:
            return {...state, ...action.payload}
        case PACKS_ACTIONS_TYPES.SET_Q_VALUE:
            return {...state, q: action.q}
        case PACKS_ACTIONS_TYPES.SET_FILTER:
            return {...state, filter: action.filter}
        case PACKS_ACTIONS_TYPES.SET_ORDER_BY:
            return {...state, orderBy: action.orderBy}
        case PACKS_ACTIONS_TYPES.SET_START_PAGINATION_INDEX:
            return {...state, startIndex: action.index}
        case PACKS_ACTIONS_TYPES.SET_CATEGORIES:
            return {...state, categories:action.categories}
        // items: state.items.filter((el) => el.volumeInfo.categories[0] === action.categories)

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

export const setFilter = (filterBooks: string) => ({
    type: PACKS_ACTIONS_TYPES.SET_FILTER,
    filter: filterBooks
} as const)

export const setOrderBy = (orderBy: string) => ({
    type: PACKS_ACTIONS_TYPES.SET_ORDER_BY,
    orderBy
} as const)

export const setCategories = (categories: string) => ({
    type: PACKS_ACTIONS_TYPES.SET_CATEGORIES,
    categories
} as const)

export const setStartPaginationIndex = (index: number) => ({
    type: PACKS_ACTIONS_TYPES.SET_START_PAGINATION_INDEX,
    index
} as const)


//THUNKS
export const fetchBooks = (payload?: GetBooksQueryParams) => async (dispatch: AppDispatch, getState: () => RootState) => {
    const books = getState().books
    try {
        dispatch(setAppIsLoading(true))
        const response = await bookApi.getBooks({
            q: books.q,
            key: books.key,
            orderBy: books.orderBy,
            maxResults: 30,
            startIndex: books.startIndex
        })
        if (!response.data.totalItems) dispatch(setAppInfo('ничего не найдено'))
        dispatch(setBooks(response.data))
    } catch (e) {
        errorsHandler(e, dispatch)
        dispatch(setAppError('ошибка запроса'))
    } finally {
        dispatch(setAppIsLoading(false))
    }
}


