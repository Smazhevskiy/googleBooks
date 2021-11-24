import React, {FC} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {PATH, Routes} from '../routes/routes'
import {useTypedSelector} from '../hooks/typedSelector'
import {Progress} from '../components/Progress/Progress'


export const AppRoutes: FC = () => {
    const {isInitialized} = useTypedSelector(state => state.app)

    if (!isInitialized) return <Progress/>
    return (
        <>

            <Switch>
                {Routes.map(r => <Route key={r.path} path={r.path} component={r.component} exact={r.exact}/>)}
                <Redirect from={PATH.EMPTY} to={PATH.ERROR}/>
            </Switch>
        </>
    )
}