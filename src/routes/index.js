import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'

// Screens
import Error404 from '../screens/404'
import BookDetais from '../screens/Book'
import Main from '../screens/Main'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/details" component={BookDetais} />
                <Route path="*" component={Error404} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
