
function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    //
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"
    let lista =[];
    let i =array.length;
    while(i>=0){
        if(array[i]<10){lista.push(array[i]);}
        i--
    };
    return lista
};


function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos
    for(let i=0;i<array1.length;i++){
        for(let j=0;j<array2.length;j++){
            if(array1[i]==array2[j]){return array1[i]}
        }
    }

};



function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
   let suma =[];
    for(let i=0;i<array.length;i++){
       if(typeof array[i] == 'object'){suma.push(array[i][0]+array[i][1])}
       else{suma.push(array[i])}
    }
    return suma
};


function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false
    let resultado = [];
    let division = numero/divisor;
    if(Number.isInteger(division)){
        for(let i=0;i<divisor;i++){
            resultado.push(division)
        };
        return resultado  
    }
    return false
};


function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido
    
    //pseudo codigo
    //ordenar el arreglo
    //pushear el primero y el ultimo
    
    // let arr=[]
    // let mayor[0]
    // let menor = array[0]
    // for(let i=0;i<array.length;i++){
    //     if(array[i]<menor){menor = array[i]}
    //     if(array[i]>mayor){mayor=array[i]}
    // }
    // arr.push(menor)
    // arr.push(mayor)
    // return arr

    //ordenar el arreglo de menor a mayor
    array.sort((a,b)=>a-b)
    return [array[0],array[array.length-1]]
};



module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};