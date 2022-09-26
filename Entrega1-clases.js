class Persona {
  nombre;
  apellido;
  libros;
  mascotas;

  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros =[];
    this.mascotas = [];
  }


  getFullName() {
    let nombreCompleto = this.nombre+' '+this.apellido
    return nombreCompleto
  }
  addMascota(nombre){
  this.mascotas.push(nombre)
}

  countMascotas() {
  return this.mascotas.length
}

  addBook(nombre, autor) {
  const book = {
    nombre: nombre,
    autor: autor
  };
  this.libros.push(book)
}
  getBookNames() {
  return this.libros.map((book)=> book.nombre)
}

}

const persona1 = new Persona('Andrea', 'Gonzalez')
persona1.addMascota('Luna')
persona1.addMascota('Pupu')
persona1.addBook('1984','George Orwell')
persona1.addBook('Bartleby, el escribiente',' Herman Melville')


console.log ('Nombre de la persona: '+ persona1.getFullName())
console.log ('Cantidad de mascotas de la persona: ' + persona1.countMascotas())
console.log ('Libros favoritos de la persona: ' + persona1.getBookNames())



