import * as React from 'react'

export interface ButtonActionsProps {
    children: JSX.Element
    className?: string | JSX.Element
    onClick?: () => void
}

export default function ButtonActions({ children, className, onClick }: ButtonActionsProps) {
    return (
        <button className={`px-3 rounded py-2 bg-whiteE6 shadow-[0_1px_2px_#0000000f] ${className}`}>{children}</button>
    )
}
