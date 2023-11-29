const CryptoJS = require('crypto-js');
const SecretKey = process.env.PUBLIC_KEY;
// Async encryption function
const encryptField = (fieldValue) => {
    if (fieldValue) {
      const encryptedField = CryptoJS.AES.encrypt(fieldValue, SecretKey).toString();
      return encryptedField;
    }
    return null;
  };

  // Async decryption function
const decryptFieldwithKey = (fieldName, encryptedFieldValue) => {
    if (encryptedFieldValue) {
        const decryptedField = CryptoJS.AES.decrypt(encryptedFieldValue, SecretKey);
        const decryptedFieldValue = decryptedField.toString(CryptoJS.enc.Utf8);
        return decryptedFieldValue;
      }
      return null;
};
  module.exports={
        encryptField,
        decryptFieldwithKey
  }