import React from 'react'
import s from './PreviewBook.module.css'
import {PATH} from '../../routes/routesType'


type PreviewBookType = {
    image?: string
    category?: string
    title?: string
    author?: string
}

export const PreviewBook = (props: PreviewBookType) => {
    const {
        category,
        image,
        title,
        author
    } = props

    const clickOnBook = () => {
        return PATH.BOOK
    }

    return (
        <>
            <div style={{cursor: 'pointer'}} onClick={clickOnBook} className={s.wrapper}>
                <div><img src={image} alt={title ? title : 'img'}/></div>
                <div className={s.descriptionsBlock}>
                    <div className={s.category}>{category}</div>
                    <div className={s.title}>{title}</div>
                    <div className={s.author}>{author}</div>
                </div>
            </div>
        </>
    )
}