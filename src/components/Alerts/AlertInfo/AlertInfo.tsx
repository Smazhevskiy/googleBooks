import React, {FC, useCallback} from 'react'

import {useDispatch} from 'react-redux'

import {Alert} from '../Alert'
import {useTypedSelector} from '../../../hooks/typedSelector'
import {setAppInfo} from '../../../store/app-reducer'

export const AlertInfo: FC = () => {
    const info = useTypedSelector(state => state.app.info)
    const dispatch = useDispatch()

    const onCloseHandler = useCallback(() => {
        dispatch(setAppInfo(''))
    }, [dispatch])

    return <Alert type={'success'} text={info} open={!!info} onClose={onCloseHandler}/>
}