import axios from 'axios'
import { useEffect, useState } from 'react'
import { apiConfig } from '../config'

function App() {
    const clientId = apiConfig.accessKey
    const clientSecret = apiConfig.secretKey
    const redirectUri = 'urn:ietf:wg:oauth:2.0:oob'
    const [authorizationCode, setAuthorizationCode] = useState('')

    useEffect(() => {
        axios
            .post('https://unsplash.com/oauth/token', {
                grant_type: 'authorization_code',
                client_id: 'YOUR_ACCESS_KEY',
                client_secret: 'YOUR_SECRET_KEY',
                redirect_uri: 'YOUR_REDIRECT_URI',
                code: 'AUTHORIZATION_CODE',
            })
            .then((response) => {
                const accessToken = response.data.access_token

                console.log(`Access token: ${accessToken}`)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    const handleClick = () => {
        window.location.href = `https://unsplash.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=public+read_user+write_user+read_photos+write_photos+write_likes+read_collections+write_collections`
    }

    useEffect(() => {
        const accessTokenEndpoint = 'https://unsplash.com/oauth/token'
        const requestBody = {
            client_id: clientId,
            client_secret: clientSecret,
            redirect_uri: redirectUri,
            code: authorizationCode,
            grant_type: 'authorization_code',
        }

        if (authorizationCode) {
            axios
                .post(accessTokenEndpoint, requestBody)
                .then((response) => {
                    const accessToken = response.data.access_token
                    console.log(`Access token: ${accessToken}`)
                })
                .catch((error) => {
                    console.error(error)
                })
        }
    }, [authorizationCode, clientId, clientSecret])

    return (
        <div>
            <button onClick={handleClick}>Authorize with Unsplash</button>
        </div>
    )
}

export default App
