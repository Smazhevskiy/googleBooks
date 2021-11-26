import React, {FC} from 'react'
import s from './BooksPage.module.css'
import {PreviewBook} from '../previewBook/PreviewBook'
import {useTypedSelector} from '../../hooks/typedSelector'
import {ItemsType, setStartPaginationIndex} from '../../store/book-reducer'
import {useDispatch} from 'react-redux'

export const BooksPage: FC = () => {
    const dispatch = useDispatch()
    let {
        items,
        q,
        startIndex,
        totalItems
    } = useTypedSelector(state => state.books)

    const nextPagesHandler = () => {
        dispatch(setStartPaginationIndex(startIndex + 30))
    }

    return (
        <div className={s.wrapper}>
            <div className={s.mappedBooks}>
                {q && items.map((el: ItemsType | any) => {
                    return <PreviewBook
                        key={el.id}
                        image={el.volumeInfo.imageLinks?.smallThumbnail}
                        category={el.volumeInfo.categories}
                        title={el.volumeInfo.title}
                        author={el.volumeInfo.authors}
                        id={el.id}
                    />
                })}
            </div>
            {totalItems &&
            <button
                onClick={nextPagesHandler}
                disabled={totalItems < startIndex + 30}
            >Load more
            </button>}
        </div>
    )
}
