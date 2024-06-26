import React from 'react'
import { ErrorPageStyle } from './style'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
    if (error.status === 404) {
        return (
            <ErrorPageStyle>
                <h1>Sahifa topilmadi</h1>

                <NavLink className="btn" to="/">
                    Bosh sahifa
                </NavLink>
            </ErrorPageStyle>
        )
    }

    return (
        <ErrorPageStyle>
            <h1>Xatolik yuz berdi</h1>

            <NavLink className="btn" to="/">
                Bosh sahifa
            </NavLink>
        </ErrorPageStyle>
    )
}

export default ErrorPage
