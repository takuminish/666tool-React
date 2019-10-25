import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {createStore} from 'redux'
import inputValue from './reducers/inputValue'
import {Provider} from 'react-redux'


const store = createStore(inputValue);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);