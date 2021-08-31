import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CreatePizzaPage from './pages/createPizza'
import EditPizzaPage from './pages/editPizza'
import DeletePizzaPage from './pages/deletePizza'
import App from './pages/App'
import FindPizzaPage from './pages/findPizza'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} exact/>
                <Route path="/delete-pizza" component={DeletePizzaPage} exact/>
                <Route path="/create-pizza" component={CreatePizzaPage} exact/>
                <Route path="/edit-pizza" component={EditPizzaPage} exact/>
                <Route path="/find-pizza/:id" component={FindPizzaPage} exact/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes