import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Sidebar } from '../components'

const RootLayout = () => {
    return (
        <div className="app">
            <Sidebar />
            <div className="app-conatiner">
                <Navbar />
                <div className="app-content">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default RootLayout
