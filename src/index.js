import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello'
import PLP from './containers/PLP';

/* render(<Hello name="Taylor"/>, document.getElementById("root")); */
render(
    <div className="plp col-sm-9 col-sm-push-2">
        <PLP />
    </div>,
    document.getElementById("root")
);