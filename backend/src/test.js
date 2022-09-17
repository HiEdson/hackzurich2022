const {createHash} = require("crypto")

const hash = createHash("sha256").update("ishimwe").digest("hex")
console.log(hash);