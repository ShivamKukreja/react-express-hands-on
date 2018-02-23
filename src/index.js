import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello'
import PLP from './containers/PLP';
import ProductReducer from './reducers/ProductReducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
/* render(<Hello name="Taylor"/>, document.getElementById("root")); */

const store = createStore(ProductReducer, { products: [], keyword: ""}, applyMiddleware(thunk) );

render(
    <div className="plp col-sm-9 col-sm-push-2">
        <Provider store = {store}>
            <PLP />
        </Provider>
    </div>,
    document.getElementById("root")
);