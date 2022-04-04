const { Queue } = require("../estructuras")
// Implementar la función controlAcces: a partir de una Queue que va a recibir como paráemtro que tiene
// en cada posición un objeto que va a representar a una persona y tiene la siguiente forma:
// {
//   fullname: "Franco Etcheverri",
//   age: 26,
//   ticket: {
//     number: 1,
//     event: "Tomorrowland"
//   }
// }
// La idea es ir verificando uno a uno si la primer persona de la cola tiene los requisitos necesarios para
// ingresar al evento correspondiente (también recibido por parámetro). Los requisitos que debe cumplir son:
// - Ser mayor de 18 años (18 inclusive es válido)
// - Tener un ticket que corresponda con el evento (prop event de ticket)
// - Que no haya ingresado ya otra persona al evento con ese mismo número de ticket
// Finalmente la función debe devolver un arreglo con todos los nombres de las personas que pudieron ingresar
// Importante!: Aquellas personas que no cumplan con los requisitos para ingresar deben ser removidos de la cola 

var controlAcces = function(queue, event){
  let Queue = queue.array;
  let tamaño = Queue.length;
  let acceso = [];
  const numeroSet = new Set()

  for(let i=0;i<tamaño;i++){
    if((Queue[i].age>17) && (Queue[i].ticket.event == event) && (!numeroSet.has(Queue[i].ticket.number))){
      acceso.push(Queue[i]);
      numeroSet.add(Queue[i].ticket.number)
    }
  }
  
  let names = []
  for(let i =0;i<acceso.length;i++){
    names.push(acceso[i].fullname)
  }
  return names
};
      
  

  module.exports = {
    controlAcces,
   
}