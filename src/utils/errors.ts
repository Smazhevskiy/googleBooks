import {AppDispatch} from '../store/store'
import {setAppError} from '../store/app-reducer'


export const errorsHandler = (error: any, dispatch: AppDispatch) => {
    dispatch(setAppError(error.response ? error.response.data.error : error))
}