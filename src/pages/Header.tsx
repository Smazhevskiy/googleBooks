import React from 'react'
import s from './Header.module.css'
import searchIcon from '../assets/icons/search.png'


const selectCategory = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']

export const Header = () => {
    return (
        <div className={s.wrapper}>
            <h1 style={{color: '#ccc'}}>Search for books</h1>

            <div className={s.searchBox}>
                <input autoFocus type="search"/>
                <img onClick={() => {
                }} className={s.searchIcon} src={searchIcon} alt="search.png"/>
            </div>

            <div className={s.optionsBox}>
                <span style={{margin:'0px 10px'}} >categories</span>
                <select id={'category'} name="categories">
                    {selectCategory.map((category, index) => <option key={index} value={category}>{category}</option>)}
                </select>

                <span style={{margin:'0px 10px'}}>sorting by</span>
                <select name="sortBy">
                    <option value="relevance ">relevance</option>
                    <option value="newest ">newest</option>
                </select>
            </div>
        </div>
    )
}