import * as JWT from 'jwt-decode';
    
export const isTokenExpired = (token) => {
  try {
    const decodedToken = JWT.jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);
    return decodedToken.exp < currentTime;
  } catch (error) {
    // Token is invalid or malformed
    return true;
  }
};

