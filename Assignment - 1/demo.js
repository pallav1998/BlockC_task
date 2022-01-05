let CryptoJS = require("crypto-js");

let Message = "Hello World";
let PrivateKey = "Secret Key";

//Symmetric Encryption
const doEncrypt = (message, key) => {
  let cipherText = CryptoJS.AES.encrypt(message, key).toString();
  return cipherText;
};

const doDecrypt = (encryptedMessage, key) => {
  let decryptedText = CryptoJS.AES.decrypt(encryptedMessage, key).toString(
    CryptoJS.enc.Utf8
  );
  return decryptedText;
};

const encryptedMsg = doEncrypt(Message, PrivateKey);
// console.log("Symmetric Encrypted Message : ", encryptedMsg);
const decryptedMsg = doDecrypt(encryptedMsg, PrivateKey);
// console.log("Symmetric Decrypted Message : ", decryptedMsg);

//Asymmetric Encryption
const nacl = require("tweetnacl");
nacl.util = require("tweetnacl-util");

//Genarating the keys
const User1 = nacl.box.keyPair();
const User2 = nacl.box.keyPair();

const ServerOne = (message) => {
  const PrivateKey = nacl.randomBytes(24);

  const cipherText = nacl.box(
    nacl.util.decodeUTF8(message),
    PrivateKey,
    User2.publicKey,
    User1.secretKey
  );

  const messageForChannel = { cipherText, PrivateKey };
  return messageForChannel;
};

const ServerTwo = (message) => {
  //Decode the message
  let decodedMessage = nacl.box.open(
    message.cipherText,
    message.PrivateKey,
    User1.publicKey,
    User2.secretKey
  );
  decodedMessage = nacl.util.encodeUTF8(decodedMessage);
  return decodedMessage;
};

let encryptedMessage = ServerOne("Hello World");
// console.log(encryptedMessage);
let decryptedMessage = ServerTwo(encryptedMessage);
console.log(decryptedMessage);
