import CryptoJS from "crypto-js";

export const EncodeLocalData = (userData) => {
  /// AES = Advanced Encryption Standard
  var ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(userData),
    ""
  ).toString();
  //log encrypted data
  console.log("Encrypt Data -");
  console.log(ciphertext);
  localStorage.setItem("user", ciphertext);
  return true;
};

export const decodeLocalData = () => {
  let localData = localStorage.getItem("user");
  if (localData) {
    var bytes = CryptoJS.AES.decrypt(localData, "");
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return decryptedData;
  } else {
    return null;
  }
};
