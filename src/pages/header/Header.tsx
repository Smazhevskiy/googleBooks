import React, {KeyboardEventHandler, useEffect, useState} from 'react'
import s from './Header.module.css'
import searchIcon from '../../assets/icons/search.png'
import {useDispatch} from 'react-redux'
import {fetchBooks, setFilter, setOrderBy, setQValueSearch} from '../../bll/book-reducer'
import {useTypedSelector} from '../../hooks/typedSelector'


const selectCategory = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']

export const Header = () => {
    let [qValue, setQValue] = useState<string>('')
    const dispatch = useDispatch()


    const {
        q,
        filter,
        orderBy,
        apikey
    } = useTypedSelector(state => state.books)

    console.log(filter)
    console.log(orderBy)

    useEffect(() => {
        dispatch(fetchBooks())
    }, [dispatch, q, apikey, orderBy, filter])


    const sendHandler = () => {
        dispatch(setQValueSearch(qValue))
    }

    const onKeyPressHandlerInput = (e: any) => {
        if (e.key === 'Enter') {
            dispatch(setQValueSearch(qValue))
        }
    }

    const onChangeInputHandler = (e: any) => {
        setQValue(e.currentTarget.value)
    }

    const changeSortHandler = (e: any) => {
        dispatch(setOrderBy(e.target.value))
    }

    const changeCategoryHandler = (e: any) => {
        dispatch(setFilter(e.target.value))
    }


    return (
        <div className={s.wrapper}>
            <h1 style={{color: '#ccc'}}>Search for books</h1>

            <div className={s.searchBox}>
                <input
                    onKeyPress={onKeyPressHandlerInput}
                    value={qValue}
                    autoFocus
                    type="search"
                    onChange={onChangeInputHandler}
                />
                <img
                    onClick={sendHandler}
                    className={s.searchIcon}
                    src={searchIcon}
                    alt="search.png"
                />
            </div>

            <div className={s.optionsBox}>
                <span style={{margin: '0px 10px'}}>categories</span>
                <select onChange={changeCategoryHandler} id={'category'} name="categories">
                    {selectCategory.map((category, index) => <option key={index} value={category}>{category}</option>)}
                </select>

                <span style={{margin: '0px 10px'}}>sorting by</span>
                <select onChange={changeSortHandler} name="sortBy">
                    <option value="relevance ">relevance</option>
                    <option value="newest ">newest</option>
                </select>
            </div>
        </div>
    )
}