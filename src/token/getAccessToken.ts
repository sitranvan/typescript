import axios from 'axios'
import { apiConfig } from '../config'

const accessTokenEndpoint = 'https://unsplash.com/oauth/token'

const clientId = apiConfig.accessKey
const clientSecret = apiConfig.secretKey
const redirectUri = 'urn:ietf:wg:oauth:2.0:oob'
const authorizationCode = '1AtiO_goEEJv6fxjcxVIXtv4V3ZcMnG5kIcTA6SF3oI'

const requestBody = {
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
    code: authorizationCode,
    grant_type: 'authorization_code',
}

axios
    .post(accessTokenEndpoint, requestBody)
    .then((response) => {
        const accessToken = response.data.access_token
        console.log(`Access token: ${accessToken}`)
    })
    .catch((error) => {
        console.error(error)
    })
