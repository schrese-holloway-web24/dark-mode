import React from 'react';
import {Route, Switch} from 'react-router-dom';

//components
import MainPage from './components/MainPage';
import Details from './components/Details';

function App() {

    return(
        <div>
            <Switch>
                <Route exact path='/' component={MainPage} />
                <Route path = '/Details/:id' component={Details} />
            </Switch>
        </div>
    )
}

export default App;