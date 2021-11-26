import React from 'react'
import s from './PreviewBook.module.css'
import {Link} from 'react-router-dom'
import {PATH} from '../../routes/routesType'


type PreviewBookType = {
    image?: string
    category?: string
    title?: string
    author?: string
    id?: string
}

export const PreviewBook = (props: PreviewBookType) => {
    const {
        category,
        image,
        title,
        author,
        id
    } = props


    return (
        <>
            <div className={s.wrapper}>
                <div><img src={image} alt={title ? title : 'img'}/></div>
                <div className={s.descriptionsBlock}>
                    <div className={s.category}>{category}</div>
                    <div className={s.title}>{title}</div>
                    <div className={s.author}>{author}</div>
                    <Link to={PATH.BOOKSPAGE + id}>View</Link>
                </div>
            </div>
        </>
    )
}