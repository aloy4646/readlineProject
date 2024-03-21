// const text = "apapun"

// const fs = require("fs")

// fs.writeFileSync("test.txt", text)

// fs.readFile('test.txt', 'utf-8', (err,data) => {
//     if (err) throw err
    
//     console.log("Isi data: ", data)
// })

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const validator = require("validator")

isValid = true

rl.question("Siapa nama anda? ", (nama) =>{
    rl.question("Berapa nomor handphone anda? ", (nomorHandphone) =>{
        rl.question("Apa nama email anda? ", (email) =>{
            if(!validator.isAlpha(nama)){
                console.log("- Format anda tidak sesuai");
                isValid = false
            }

            if(!validator.isMobilePhone(nomorHandphone, "id-ID")){
                console.log("- Nomor Handphone yang anda berikan tidak sesuai format")
                isValid = false
            }
            
            if (!validator.isEmail(email)){
                console.log("- Email yang anda berikan tidak sesuai format")
                isValid = false
            }

            if (isValid){
                console.log("===========================\n" + 
                "Berikut ini adalah data diri anda\n" + 
                "Nama: " + nama +
                "\nNomor handphone: " + nomorHandphone +
                "\nEmail: " + email)
            }

            rl.close()
        })
    })
})