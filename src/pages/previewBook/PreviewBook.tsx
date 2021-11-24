import React from 'react'
import s from './PreviewBook.module.css'


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

    return (
        <div className={s.wrapper}>
            <div className={s.bookImg}><img src={image} alt="book"/></div>
            <div className={s.descriptionsBlock}>
                <div className={s.category}>{category}</div>
                <div className={s.title}>{title}</div>
                <div className={s.author}>{author}</div>
            </div>
        </div>
    )
}