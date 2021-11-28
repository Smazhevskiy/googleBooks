import React from 'react'
import s from './Book.module.css'
import {Redirect, useParams} from 'react-router-dom'
import {useTypedSelector} from '../../hooks/typedSelector'
import {PATH} from '../../routes/routesType'


export const Book = () => {
    let {items} = useTypedSelector(state => state.books)
    const {id} = useParams<{ id: string }>()

    let currBook: any = items.find((el) => el.id === id)


    function imgSrc() {
        if (currBook.volumeInfo.imageLinks?.large) return currBook.volumeInfo.imageLinks?.large
        if (currBook.volumeInfo.imageLinks?.medium) return currBook.volumeInfo.imageLinks?.medium
        if (currBook.volumeInfo.imageLinks?.thumbnail) return currBook.volumeInfo.imageLinks?.thumbnail
        return 'https://yt3.ggpht.com/a/AATXAJyI5u3cCKLCv3wEIU23z1oC_Ww88RGbXbCu_HWI5w=s900-c-k-c0xffffffff-no-rj-mo'
    }

    if (!currBook) return <Redirect to={PATH.BOOKSPAGE}/>

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.imgWrapper}>
                    <img
                        src={imgSrc()}
                        alt=""/>
                </div>
                <div className={s.descriptionBlock}>
                    <div className={s.categories}>{currBook ? currBook.volumeInfo.categories : 'some categories'}</div>
                    <div className={s.title}>{currBook ? currBook.volumeInfo.title : 'some title'}</div>
                    <div className={s.authors}>{currBook ? currBook.volumeInfo.authors : 'some authors'}</div>
                    <div className={s.description}>{currBook ? currBook.volumeInfo.description : 'dff'}</div>
                </div>
            </div>
        </div>
    )
}

