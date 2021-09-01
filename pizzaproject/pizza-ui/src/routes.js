import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CreatePizzaPage from './pages/createPizza'
import App from './pages/App'
import findAndEditPizza from './pages/findAndEditPizza'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} exact/>
                <Route path="/create-pizza" component={CreatePizzaPage} exact/>
                <Route path="/find-pizza/:id" component={findAndEditPizza} exact/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes