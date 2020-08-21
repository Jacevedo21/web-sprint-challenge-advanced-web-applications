import React, { useState, Component } from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import Login from '../components/Login'

const PrivateRoute = ({ componenet: Component, ...rest }) => {
    return <Route
    {...rest}
    render={props => {
        return localStorage.getItem("token") ? (
            <Component {...props} />
        ) : (
            <Redirect to="/" />
        )
    }}
    />
}
export default PrivateRoute