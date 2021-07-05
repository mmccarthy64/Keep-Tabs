import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import manageLibrary from './reducers/manageLibrary'
import thunk from 'redux-thunk';
import Dashboard from './Dashboard';

const store = createStore(manageLibrary, compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Dashboard />
            </Provider>
        );
    }
}

export default App;
