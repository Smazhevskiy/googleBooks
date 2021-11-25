import {bookApi, BookResponse, GetBooksQueryParams} from '../api/bookApi'
import {AppDispatch, RootState} from './store'
import {setAppIsLoading} from './app-reducer'
import {errorsHandler} from '../utils/errors'


enum PACKS_ACTIONS_TYPES {
    SET_BOOKS = 'BOOKS/SET_BOOKS',
    SET_Q_VALUE = 'BOOKS/SET_Q_VALUE',
    SET_FILTER = 'BOOKS/SET_FILTER',
    SET_ORDER_BY = 'BOOKS/SET_ORDER_BY',
    SET_CATEGORIES = 'SET_CATEGORIES',

}

export type BooksActionsTypes =
    | ReturnType<typeof setBooks>
    | ReturnType<typeof setQValueSearch>
    | ReturnType<typeof setFilter>
    | ReturnType<typeof setOrderBy>
    | ReturnType<typeof setCategories>


export type BooksInitialState = {
    kind: string
    totalItems: number
    items: any []
    q: string | null
    key: string
    filter: string
    orderBy: string
    categories: string
}

export const initialState: BooksInitialState = {
    kind: 'some',
    totalItems: 0,
    items: [],
    q: '',
    key: 'AIzaSyA1vOYaRAU3dpj48FLXOrHd7u2FhwO5qfE',
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
        case PACKS_ACTIONS_TYPES.SET_CATEGORIES:
            return {...state, items: state.items.filter((el) => el.volumeInfo.categories[0] === action.categories)}


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


//THUNKS
export const fetchBooks = (payload?: GetBooksQueryParams) => async (dispatch: AppDispatch, getState: () => RootState) => {
    const books = getState().books
    try {
        dispatch(setAppIsLoading(true))
        const response = await bookApi.getBooks({
            q: books.q,
            key: books.key || null,
            orderBy: books.orderBy
        })
        dispatch(setBooks(response.data))
    } catch (e) {
        errorsHandler(e, dispatch)
    } finally {
        dispatch(setAppIsLoading(false))
    }
}

