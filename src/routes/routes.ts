import {FC} from 'react'
import {BooksPage} from '../pages/booksPage/BooksPage'
import {Book} from '../pages/book/Book'
import {ErrorPage} from '../pages/error/ErrorPage'

export enum PATH {
    BOOKPAGE = '/',
    BOOK = '/books/:id?',
    EMPTY = '',
    ERROR = '/404',
}

type Routes = {
    path: string,
    component: FC
    exact?: boolean
}

export const Routes: Routes[] = [
    {path: PATH.BOOKPAGE, component: BooksPage, exact: true},
    {path: PATH.BOOK, component: Book},
    {path: PATH.ERROR, component: ErrorPage},
]