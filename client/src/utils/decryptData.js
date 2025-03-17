import CryptoJS from 'crypto-js';
 
const secretKey = process.env.REACT_APP_CRYPTO_SECRET_KEY 

export const decryptData = (ciphertext) => {
 try {
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
 } catch (e) {
  console.error("Decryption error:", e);
  return null;
 }
};

