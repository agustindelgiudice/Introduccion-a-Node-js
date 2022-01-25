const Operacion = require('./calculator')
const fs = require('fs');
let moment = require ('moment');
let num1 = 5;
let num2 = 10;
let myDate = new Date();
myDate = moment(myDate).format('LLL')

let operacion = new Operacion(num1,num2);
console.log(`El resultado de la suma es: ${operacion.suma()}`)
console.log(`El resultado de la resta es: ${operacion.resta()}`)
console.log(`El resultado de la multiplicación es: ${operacion.mult()}`)
console.log(`El resultado de la división es: ${operacion.div()}`);

fs.writeFile('log.txt', `La suma es: ${operacion.suma()}`, (error) =>{
    if(error){
        throw error;
    }else {console.log('Archivo Creado')}
})

