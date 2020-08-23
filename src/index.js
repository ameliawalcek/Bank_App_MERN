import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react'
import { Transaction } from '../src/stores/TransactionStore';
import { Input } from '../src/stores/InputStore';


let input = new Input()
let transaction = new Transaction()
let stores = { transaction, input }

ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
