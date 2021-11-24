import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk, {ThunkAction} from 'redux-thunk'
import {booksReducer} from './book-reducer'
import {appReducer} from './app-reducer'


const rootReducer = combineReducers({
    books: booksReducer,
    app: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, any>

// @ts-ignore
window.store = store