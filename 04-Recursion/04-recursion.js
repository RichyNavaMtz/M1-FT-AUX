// Usando la recursion calcular el producto de todos los numeros de dado arreglo
// ej:
// producto([1, 2, 5]) devuelve 10

const producto = function (array) {
  //escribe aqui tu codigo
  
  if(array.length==0){return 1}
  
  return array.shift()*producto(array)

};





const isThere = function (obj, value){
  let keys = Object.keys(obj)

  for(let i=0;i<keys.length;i++){
    if(obj[keys[i]]==value){return true}		
  }

  for(let i=0;i<keys.length;i++){
    if(typeof obj[keys[i]]=='object'){return isThere(obj[keys[i]],value)} 
  }

  return false
};


module.exports = { producto, isThere };
