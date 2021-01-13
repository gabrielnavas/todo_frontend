import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { SIGNUP, TODO } from "./CONSTANTS"
import { NotFoundPage } from '../pages/not-found'
import { SignUpPage } from '../pages/signup'
import { TodoPage } from '../pages/todo'


export const RouterConfig = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={SIGNUP} component={SignUpPage} />
                <Route exact path={TODO} component={TodoPage} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
        </Router>
    )
}
