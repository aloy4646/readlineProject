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


function tanyaNama(){
    rl.question("Siapa nama anda? ", (nama) =>{
        tanyaNomorHandphone(nama)
    })
    
}

function tanyaNomorHandphone(nama){
    rl.question("Berapa nomor handphone anda? ", (nomorHandphone) =>{
        tanyaEmail(nama, nomorHandphone)
    })
}

function tanyaEmail(nama, nomorHandphone){
    rl.question("Apa nama email anda? ", (email) =>{
        console.log("===========================\n" + 
            "Berikut ini adalah data diri anda\n" + 
            "Nama: " + nama +
            "\nNomor handphone: " + nomorHandphone +
            "\nEmail: " + email)
        
        rl.close()
    })
}

tanyaNama()