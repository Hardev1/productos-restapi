const CryptoJS = require("crypto-js");
const config = require("config");
const jwt = require("jwt");

exports.EncryptPassword = (password) => {
    let secretKey = config.get("secretkeys").cryptojs;
    let encriptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
    return encriptedPassword;
};

exports.DecryptPassword = (cryptedPassword) => {
    let secretKey = config.get("secretkeys").cryptojs;
    let bytes = CryptoJS.AES.decrypt(cryptedPassword, secretKey);
    let originalPass = bytes.toString(CryptoJS.enc.Utf8);
    return originalPass;
};

exports.GenerateToken = (customerUser) => {
    let secretKey = config.get("secretkeys").jwt;
    let token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: {
            username: customerUser.username,
            id: customerUser._id
        }
    }, secretKey);
    return token;
};