import { Switch, Route, Router } from 'react-router-dom'

import {
  LOGIN_PAGE_ROUTE,
  RECUPERATION_ACCOUNT_PAGE_ROUTE,
  ROOT_PAGE_ROUTE,
  SIGNUP_PAGE_ROUTE,
  TODO_PAGE_ROUTE

} from './CONSTANTS'
import { NotFoundPage } from '../pages/not-found'
import { SignUpPage } from '../pages/signup'
import { TodoPage } from '../pages/todo'
import { LoginPage } from '../pages/login'
import { routerHistory } from '../adapters/router/routerHistory'
import { PrivateRoute } from './private-route'
import { RecuperationAccountPage } from 'pages/recuperation-user-account'

export const RouterConfig = () => {
  return (
        <Router history={routerHistory.getInstance()}>
            <Switch>
                <Route
                    exact
                    path={SIGNUP_PAGE_ROUTE}
                    component={SignUpPage}
                />
                <Route
                    exact
                    path={[LOGIN_PAGE_ROUTE, ROOT_PAGE_ROUTE]}
                    component={LoginPage}
                />
                <Route
                    exact
                    path={RECUPERATION_ACCOUNT_PAGE_ROUTE}
                    component={RecuperationAccountPage}
                />
                <PrivateRoute
                    exact
                    redirectPath={LOGIN_PAGE_ROUTE}
                    path={TODO_PAGE_ROUTE}
                    component={TodoPage}
                />
                <Route path="*" component={NotFoundPage}
                />
            </Switch>
        </Router>
  )
}
