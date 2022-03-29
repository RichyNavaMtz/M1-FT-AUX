// Actividad 1
function crearClaseLibro() {
  class Libro {
    constructor(titulo, autor, traducciones) {
      // El constructor de la clase Libro recibe titulo (string), autor (string), traducciones (array de objetos)
      // Inicializar las propiedades del libro con los valores recibidos como argumento
      // Tu código aca:
      this.titulo=titulo,
      this.autor=autor,
      this.traducciones=traducciones
    }

    getTitulo() {
      // este método debe retornar el titulo del libro.
      // Tu código aca:
      return this.titulo
      
    }

    getAutor() {
      // El método debe retornar nombre y apellido del autor
      // Tu código aca:
      return this.autor
    }

    addTraduccion(idioma, editorial) {
      // El método recibe un string 'idioma' y un string 'editorial' y debe agregar un objeto:
      // { idioma: idioma, editorial: editorial} al arreglo de traducciones del libro.
      // No debe retornar nada.
      // Tu código aca:
      this.traducciones.push({idioma:idioma, editorial:editorial})
  
    }

    getTraducciones() {
      // El método debe retornar un arreglo con sólo los idiomas del arreglo de traducciones del libro.
      // Ej:
      // Suponiendo que el libro tiene estas traducciones: [{idioma: 'inglés', editorial: 'Scholastic'}, {idioma: 'castellano', editorial: 'Santillana'}]
      // libro.getTraducciones() debería devolver ['inglés', 'castellano']
      // Tu código aca:
      let arr=[]
      this.traducciones.forEach(element => {
        arr.push(element.idioma) //o elemento.idioma
      });
      return arr
    }

    getAlcance() {
      // El metodo debe retornar la cantidad de idiomas en la que esta traducido el libro.
      // Dato: no se repiten ni los idiomas ni las editoriales
      // ej:
      // Suponiendo que el libro tiene estas traducciones: [{idioma: 'inglés', editorial: 'Scholastic'}, {idioma: 'castellano', editorial: 'Santillana'}]
      // libro.getAlcance() deberia devolver 2
      // Tu código aca:
      let idiomas=this.getTraducciones()
      let aux =new Set(idiomas)
      return aux.size
    }
  }

  return Libro;
}

//Objeto de ejemplo:
// const hogwarts = {
//   staff: {
//     headmaster: {
//       name: "Albus Percival Wulfric Brian Dumbledore",
//     },
//     keeperOfKeys: {
//       name: "Rubeus Hagrid",
//     },
//    potionsMaster: {
//       name: "Severus Snape",
//     },
//   },
// };

//["The headmaster is Albus Percival Wulfric Brian Dumbledore", 
//"The keeperOfKeys is Rubeus Hagrid",
// "The potionsMaster is Severus Snape",
//"The headOfGryffindor is Minerva McGonagall"]
//BUCLE FOR IN
const printStaff = function (objeto) {
  // Retornar un arreglo que contenga los strings indicando el titulo y nombre de cada miembro del staff
  // de esta forma "The headmaster is Albus Percival Wulfric Brian Dumbledore" 
  // el arreglo debe mantener el orden que posee el staff del objeto.
  let staff=[]
  for(const property in objeto.staff){
    staff.push(`The ${property} is ${objeto.staff[property].name}`)
  }
  return staff
};

module.exports = { crearClaseLibro, printStaff };
