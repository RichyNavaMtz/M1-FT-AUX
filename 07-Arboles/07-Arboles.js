const { BinarySearchTree } = require("../estructuras")

// En el prototipo de BinarySearchTree crear la funcion search que debe recibir un parametro y buscarlo en el arbol
// si lo encuentra, debe retornar el nodo. En caso contrario retornar el mensaje correspondiente.
// Ejemplo      (10)          
//             /     \
//          (7)     (12)       
//         /  \      /  \
//      (2)  (9)  (11)  (15)   
BinarySearchTree.prototype.search= function(valor){
    if(this.value == valor){return this.value}

	if(valor > this.value){
        if(!this.right){
            return 'no se encontró el valor'
        }else{
            return this.right.search(valor)
        }
    }
  
	if(valor < this.value){
        if(!this.left){
            return 'no se encontró el valor'
        }else{
            return this.left.search(valor)
        }
    } 
    
    return 'no se encontró el valor'
}


// En el prototipo de BinarySearchTree crear la funcion height que debe retornar la altura del mismo (cantidad de niveles)
// Ejemplo      (10)           ----> nivel 0
//             /     \
//          (7)     (12)       ----> nivel 1
//         /  \      /  \
//      (2)   (9)  (11)  (15)   ----> nivel 2


BinarySearchTree.prototype.height= function(){
let der = this.right
let izq = this.left
let countDer=0
let countIzq=0

while(der){
    der = der.right
    countDer+=1
}

while(izq){
    izq = izq.left
    countIzq +=1
}

if(countIzq >= countDer){
    return countIzq
}else{
    return countDer
}

}

module.exports={
    BinarySearchTree
}