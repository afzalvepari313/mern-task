// Import necessary modules
const CryptoJS = require('crypto-js');
require("dotenv").config();


// Async encryption function
async function encryptData(data, encryptionKey) {
  return new Promise((resolve) => {
    const ciphertext = CryptoJS.AES.encrypt(data, encryptionKey).toString();
    resolve(ciphertext);
  });
}

// Async decryption function
async function decryptData(ciphertext, encryptionKey) {
  return new Promise((resolve) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, encryptionKey);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    resolve(decryptedData);
  });
}

// Usage
// (async () => {
//   const encryptionKey = process.env.PUBLIC_KEY;
//   const data = 'Hello, World!';

//   const encrypted = await encryptData(data, encryptionKey);
//   console.log('Encrypted:', encrypted);

//   const decrypted = await decryptData(encrypted, encryptionKey);
//   console.log('Decrypted:', decrypted);
// })();