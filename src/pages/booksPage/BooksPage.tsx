import React, {FC} from 'react'
import s from './BooksPage.module.css'
import {PreviewBook} from '../previewBook/PreviewBook'
import {useTypedSelector} from '../../hooks/typedSelector'
import {ItemsType} from '../../store/book-reducer'

export const BooksPage: FC = () => {
    let {
        items,
        q
    } = useTypedSelector(state => state.books)

    return (
        <div className={s.wrapper}>
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
    )
}