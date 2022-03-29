import React from 'react';
import { connect } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import { LayoutRoute } from "./../routes";

import Header from './Header/Header';

const UserLayout = (props) => {
    return (
        <div className="main">
            <Header {...props} />
            <Routes>
                {LayoutRoute.map((route, index) => {
                    return <Route
                        key={index}
                        exact={route.exact}
                        path={route.path}
                        element={route.component}
                    />
                })}
            </Routes>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserLayout);