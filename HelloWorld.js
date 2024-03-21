// phonetrue = "089888"
// phonefalse = "sahjk124512"

emailtrue = "reqq@jhgajslg.ac.id"
emailfalse = "1234@maikl1234"

const validator = require("validator")

// console.log(validator.isMobilePhone(phonetrue, "id-ID"))
// console.log(validator.isMobilePhone(phonefalse))

console.log(validator.isEmail(emailtrue))
console.log(validator.isEmail(emailfalse))