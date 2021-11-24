import React, {FC, useCallback} from 'react'
import {useDispatch} from 'react-redux'


import {Alert} from '../Alert'
import {useTypedSelector} from '../../../hooks/typedSelector'
import {setAppError} from '../../../store/app-reducer'

export const AlertError: FC = () => {
    const error = useTypedSelector(state => state.app.error)
    const dispatch = useDispatch()

    const onCloseHandler = useCallback(() => {
        dispatch(setAppError(''))
    }, [dispatch])

    return <Alert type={'error'} text={error} open={!!error} onClose={onCloseHandler}/>
}