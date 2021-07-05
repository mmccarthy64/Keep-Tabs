import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import manageLibrary from './reducers/manageLibrary'
import thunk from 'redux-thunk';
import Dashboard from './Dashboard';
import {
    Route,
    Switch,
    BrowserRouter,
  } from "react-router-dom";

const store = createStore(manageLibrary, compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <Switch>
                <Route exact path='/' />
                <Route exact path='/dashboard'>
                    <Provider store={store}>
                        <Dashboard />
                    </Provider>
                </Route>
            </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
