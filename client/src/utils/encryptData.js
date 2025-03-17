import CryptoJS from 'crypto-js';
 
const secretKey = process.env.REACT_APP_CRYPTO_SECRET_KEY 

export const encryptData = (data) => {
 try {
  return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
 } catch (e) {
  console.error("Encryption error:", e);
  return null;
 }
};
