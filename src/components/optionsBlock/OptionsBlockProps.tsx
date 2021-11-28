import {Select} from '../Select/Select'
import React from 'react'
import {categoryOptions, sortByOptions} from '../header/Header'
import {useTypedSelector} from '../../hooks/typedSelector'
import s from './OptionsBlockProps.module.css'

type OptionsBlockProps = {
    changeCategories: (option: string) => void
    changeSortHandler: (option: string) => void
}

export const OptionsBlock = (props: OptionsBlockProps) => {
    let {totalItems} = useTypedSelector(state => state.books)

    const {
        changeCategories,
        changeSortHandler,
    } = props


    return (
        <div className={s.wrapper}>
            {totalItems > 0 && <span className={s.totalItems}>Found {totalItems} results </span>}

            <div className={s.optionsBox}>

                <div style={{margin: '0px 10px'}}>categories</div>
                <Select options={categoryOptions} onChangeOption={changeCategories}/>

                <div style={{margin: '0px 10px'}}>sorting by</div>
                <Select options={sortByOptions} onChangeOption={changeSortHandler}/>
            </div>
        </div>
    )
}