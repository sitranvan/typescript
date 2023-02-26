import React from 'react'
import { useParams } from 'react-router-dom'

export default function AuthorPage() {
    const { user } = useParams()

    return (
        <div>
            <h1>Author Page</h1>
            <p>User: {user}</p>
        </div>
    )
}
