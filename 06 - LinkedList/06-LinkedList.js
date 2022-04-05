const { LinkedList, Node } = require("../estructuras")
  //agregar el metodo size al prototipo de LinkedList.
  // Este metodo deberia retornar la cantidad de elementos de la lista
  LinkedList.prototype.size=function(){
    return this.len
  }


// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [3]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [5] --> [4] --> [1]
// ACLARACIÓN: Se debe ordenar la lista original y no una nueva.
LinkedList.prototype.orderList = function () {
    // Tu código aca:
    if(this.size()==1){return this}
  
    let current = this.head
    while(current.next){
      if(current.value < current.next.value){
        let aux = current.next.value
        current.next.value = current.value
        current.value = aux
        current = this.head
      }else{
        current=current.next
      }
    }
    
    return this
  };


  //agregar el metodo insert al prototipo de LinkedList.
  // Este metodo deberia recibir una posicion y un valor
  // agregar el valor en la posicion indicada
  //tomar el head como posicion 1  
  
    
LinkedList.prototype.insert = function(data,pos) {
   let current = this.head 
  
  if(pos==1){
    let siguiente =this.head
    this.head = new Node(data)
    this.head.next=siguiente
    this.len++
    return this
  }
  
  let i =2
  while(i<pos){
    current=current.next
    i++
  }
 	//posicion en la que agregamos un nuevo nodo con el valor que antes ya ha sido mencionado
  // pos = current.next
  let posterior = current.next
  current.next = new Node(data)
  this.len++
  current.next.next=posterior
  return this
}
  




module.exports={
  LinkedList
}



