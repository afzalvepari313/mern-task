const crypto = require('crypto');
const NodeRSA = require('node-rsa');
const CryptoJS = require('crypto-js');
const { log } = require('console');

// Retrieve private and public keys from environment variables
const privateKey = process.env.PRIVATE_KEY;
const publicKey = process.env.PUBLIC_KEY;

// Generate an RSA key pair if keys are not provided
const generateKeyPair = () => {
  if (!privateKey || !publicKey) {
    const key = new NodeRSA({ b: 2048 });
    return {
      privateKey: key.exportKey('private'),
      publicKey: key.exportKey('public'),
    };
  } else {
    return { privateKey, publicKey };
  }
};
// Encrypt data using RSA
const encryptWithRSA = (data, publicKey) => {
  const key = new NodeRSA(publicKey);
  return key.encrypt(data, 'base64');
};

// Decrypt data using RSA
const decryptWithRSA = (encryptedData, privateKey) => {
  const key = new NodeRSA(privateKey);
  return key.decrypt(encryptedData, 'utf8');
};

// Encrypt data using AES
const encryptWithAES = (data, key) => {
  const encryptedData = CryptoJS.AES.encrypt(data, key).toString();
  return encryptedData;
};

// Decrypt data using AES
const decryptWithAES = (encryptedData, key) => {
  const decryptedData = CryptoJS.AES.decrypt(encryptedData, key).toString(CryptoJS.enc.Utf8);
  return decryptedData;
};

module.exports = {
  generateKeyPair,
  encryptWithRSA,
  decryptWithRSA,
  encryptWithAES,
  decryptWithAES,
};
