import jwtDecode from 'jwt-decode'
import axios from "../../axios"

class AuthService {
    isValidToken(accessToken) {
        if (!accessToken) {
            return false
        }

        const decodedToken = jwtDecode(accessToken)
        const currentTime = Date.now() / 1000
        return decodedToken.exp > currentTime
    }

    async getUser(accessToken) {
        if (!this.isValidToken(accessToken)) {
            console.log('Se vención el tiempo del token');
            return null;
        }
        try {
            const user = await axios.get('/auth/v1/profile');
            return user.data;
        } catch(error) {
            console.error(`Error while getting /auth/v1/profile: ${error}`);
            return null;
        }
    }
}

export default new AuthService()
