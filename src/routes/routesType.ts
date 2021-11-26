import {FC} from 'react'
import {BooksPage} from '../pages/booksPage/BooksPage'
import {Book} from '../pages/book/Book'
import {ErrorPage} from '../pages/error/ErrorPage'


export enum PATH {
    BOOKSPAGE = '/',
    BOOK = '/:id?',
    EMPTY = '',
    ERROR = '/404',
}

type RoutesType = {
    path: string,
    component: FC
    exact?: boolean
}

export const Routes: RoutesType[] = [
    {path: PATH.BOOKSPAGE, component: BooksPage, exact: true},
    {path: PATH.BOOK, component: Book},
    {path: PATH.ERROR, component: ErrorPage},

]