import React, {useEffect, useState} from 'react'
import s from './Header.module.css'
import searchIcon from '../../assets/icons/search.png'
import {useDispatch} from 'react-redux'
import {fetchBooks, setFilter, setOrderBy, setQValueSearch} from '../../store/book-reducer'
import {useTypedSelector} from '../../hooks/typedSelector'
import {setAppInfo} from '../../store/app-reducer'
import {Select} from '../../components/Select/Select'


export const categoryOptions = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']
export const sortByOptions = ['relevance', 'newest']

export const Header = () => {
    let [qValue, setQValue] = useState<string>('')
    const dispatch = useDispatch()

    const {
        q,
        filter,
        orderBy,
        totalItems,
        startIndex
    } = useTypedSelector(state => state.books)


    useEffect(() => {
        if (q) dispatch(fetchBooks())
    }, [dispatch, q, orderBy, filter, startIndex])


    const sendHandler = () => {
        if (!qValue) {
            dispatch(setAppInfo('Введите данные для поиска'))
        }
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

    const changeSortHandler = (option: string) => {
        dispatch(setOrderBy(String(option)))
        dispatch(setAppInfo(String(`Sort by ${option}`)))
    }

    const changeCategoryHandler = (option: string) => {
        dispatch(setFilter(String(option)))
        dispatch(setAppInfo(String(`Filtered by ${option}`)))

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
                {totalItems > 0 && <h3 className={s.totalItems}>Found {totalItems} results </h3>}
                <span style={{margin: '0px 10px'}}>categories</span>
                <Select options={categoryOptions} onChangeOption={changeCategoryHandler}/>

                <span style={{margin: '0px 10px'}}>sorting by</span>
                <Select options={sortByOptions} onChangeOption={changeSortHandler}/>
            </div>
        </div>
    )
}