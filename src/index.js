import React, {Fragment} from 'react';
import {render} from 'react-dom';
import Authorization from './Authorization-app/Authiorization-app';
import Header from './Header-app/Header-app';
import './Style.css';

let HTML = () => {
    return (
        <Fragment>
            <Authorization/>
            <Header/>
        </Fragment>
    )
};
render(<HTML/>, document.getElementById("root"));