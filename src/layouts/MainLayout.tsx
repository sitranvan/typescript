import React, { Fragment } from 'react'
import HeaderLayout from './modules/HeaderLayout'
import FooterLayout from './modules/FooterLayout'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
    return (
        <Fragment>
            <HeaderLayout />
            <Outlet />
            <FooterLayout />
        </Fragment>
    )
}
