module.exports = {
    secret: "S%u9N]A@v3@!",
    expiresIn: 120,    //in milliseconds
    notBefore: 2,   //we can use this token after 1 min
    audience: "site-users",
    issuer: "VRK",
    algorithm: "HS512"
}