import { Outlet } from 'react-router-dom'
import HeaderLayout from './modules/HeaderLayout'
import { Fragment } from 'react'

export default function OnlyHeaderLayout() {
    return (
        <Fragment>
            <HeaderLayout />
            <Outlet />
        </Fragment>
    )
}
