const readLine = require('readline')

const rl = readLine.createInterface({
    input : process.stdin,
    output : process.stdout,
})


const demarrerProgramme = ()=>{
    rl.question('Quel est tin prenom : ', reponse =>{

        console.log('ta reponse est : ' + reponse);
       
    })
    
}

demarrerProgramme()