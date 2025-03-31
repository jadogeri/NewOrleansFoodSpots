import * as JWT from 'jwt-decode';
   
export const isTokenExpired = (token) => {
    if (!token) return true;
    try {
        const decodedToken = JWT.jwtDecode(token);
        const currentTime = Date.now() / 1000;
        return decodedToken.exp < currentTime;
    } catch (error) {
        return true;
    }
};