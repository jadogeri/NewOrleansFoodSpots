import jwtDecode from 'jwt-decode';

export const isTokenExpired = (token) => {
  try {
    const decodedToken = jwtDecode(token);

    // Check if 'exp' (expiration time) claim exists
    if (!decodedToken.exp) {
      return true; // Token is invalid or doesn't have an expiration time
    }

    const currentTime = Math.floor(Date.now() / 1000); // Convert to seconds

    return decodedToken.exp < currentTime;
  } catch (error) {
    // Handle decoding errors or invalid tokens
    console.error("Error decoding or checking token:", error);
    return true; // Treat as expired to be safe
  }
};


/**
 * 
 * 
 const token = localStorage.getItem('yourToken');

if (token && !isTokenExpired(token)) {
  // Token is valid, proceed with your logic
  console.log("Token is valid");
  // e.g., make API calls
} else {
  // Token is expired or invalid, handle accordingly
  console.log("Token is expired or invalid");
  // e.g., redirect to login, clear token
}
 */