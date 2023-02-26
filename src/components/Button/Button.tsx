import React from 'react'
import { Link } from 'react-router-dom'

export interface ButtonProps {
    children: JSX.Element | string
    className?: string
    to?: string
    href?: string
}

export default function Button({ children, className, to, href }: ButtonProps) {
    let Component: any = 'button'
    Component = to ? Link : href ? 'a' : Component
    return <Component className={`px-3 leading-8 rounded-md bg-grayEe text-gray76 ${className}`}>{children}</Component>
}
