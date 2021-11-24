import {TypedUseSelectorHook, useSelector} from 'react-redux'
import {RootState} from '../bll/store'


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector