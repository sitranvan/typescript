import * as React from 'react'
import { NavLink } from 'react-router-dom'

export interface TagNameProps {
    children: React.ReactNode
    className?: string
    to: string
}

export default function TagName({ children, className, to }: TagNameProps) {
    return (
        <NavLink
            to={to}
            className={`leading-[26px] text-gray76 bg-grayEe inline-block px-2 rounded-sm hover:text-black11 transition-all cursor-pointer ${className}`}
        >
            {children}
        </NavLink>
    )
}
