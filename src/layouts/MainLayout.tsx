import React, { Fragment } from 'react'
import HeaderLayout from './modules/HeaderLayout'
import FooterLayout from './modules/FooterLayout'
import { Outlet } from 'react-router-dom'
import TopicsTitle from './modules/TopicsTitle'

export default function MainLayout() {
    return (
        <Fragment>
            <HeaderLayout>
                <TopicsTitle />
            </HeaderLayout>
            <Outlet />
            <FooterLayout />
        </Fragment>
    )
}
