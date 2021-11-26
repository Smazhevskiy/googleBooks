import React from 'react'
import s from './Book.module.css'
import {Redirect, useParams} from 'react-router-dom'
import {useTypedSelector} from '../../hooks/typedSelector'
import {PATH} from '../../routes/routesType'



export const Book = () => {
    let {items} = useTypedSelector(state => state.books)
    const {id} = useParams<{ id: string }>()

    let currBook: any = items.find((el) => el.id === id)

    if (!currBook) return <Redirect to={PATH.BOOKSPAGE}/>

    return (
        <div className={s.wrapper}>
            <div className={s.imgWrapper}>
                <img
                    src={currBook ? currBook.volumeInfo.imageLinks.thumbnail : 'https://cdn.pixabay.com/photo/2018/06/24/23/13/book-3495713_1280.jpg'}
                    alt=""/>
            </div>
            <div className={s.descriptionInfo}>
                <div>{currBook ? currBook.volumeInfo.categories : 'some categories'}</div>
                <div>{currBook ? currBook.volumeInfo.title : 'some title'}</div>
                <div>{currBook ? currBook.volumeInfo.authors : 'some authors'}</div>
                <div>{currBook ? currBook.volumeInfo.description : 'dff'}</div>
            </div>
        </div>
    )
}