const crypto = require("crypto");
const hexToBinary = require ("hex-to-binary");
const cryptoHash = (...inputs) => {
  const hash = crypto.createHash("sha256");
  hash.update(inputs.sort().join("")); //helloworld ,worldhello
  return hexToBinary(hash.digest("hex"));
};

result = cryptoHash("hello", "world");
module.exports = cryptoHash;
console.log(result);