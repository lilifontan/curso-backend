const fs = require ('fs')
//const path = require ('path')
//nombreArchivo = 'productos.json'

class Contenedor {
  archivo;
  productos;

  constructor(archivo, productos) {
    this.archivo = archivo
    this.productos = productos

    if ((!fs.existsSync(archivo))){
         productos = JSON.stringify(productos, null, '\t')
      fs.writeFileSync(archivo, productos)
    } else 
    {
      let arch = fs.readFileSync(archivo, 'utf-8')
      this.productos = JSON.parse(arch)
    }
 
}
}
//FUNCIONES DE LECTURA Y ESCRITURA DE ARCHIVOS
const readFile = async (nombreArchivo) => {
  const dato =  await fs.promises.readFile(nombreArchivo, 'utf-8')
  return JSON.parse(dato) 
}

const saveProducts = async (file, productos) =>{
  const data = JSON.stringify(productos, null, '\t')
  await fs.promises.writeFile(file, data)
}

//FUNCIONES DE GESTIÓN DE CONTENIDO DE ARCHIVOS
const getAll = async (file) => {
  const productos = await readFile(file)
  return productos
}

const getById = async (file, id) => {
  const productos =  await readFile(file)
  const indice = productos.findIndex((prod) => prod.id === id)
  if (indice <0) {
    console.log ('El producto no existe')
    return null}
  else return productos[indice]
}

const save = async (file, data) => {
  const productos = await readFile(file)
  if(!data.title || !data.price) throw new Error ('Producto a almacenar no válido')

  const producto =  {
    "title": data.title,
    "price": data.price,
    "thumbnail": data.thumbnail,
    "id":productos [productos.length-1].id+1
}
productos.push (producto)
saveProducts (file, productos)
}

const deleteById = async (file, idBuscado) => {
  const productos = await readFile(file)

  const indice = productos.findIndex((prod) => prod.id === idBuscado)
  if (indice <0) return

  productos.splice(indice, 1)
  saveProducts(file, productos)

}

const deleteAll = async (file) => {
  await saveProducts(file, [])
}

const randomP = async (file) => {
  const productos =  await readFile(file)
  const id = Math.round(Math.random ()*((contenedor.productos.length-0)+0) ) 
  const indice = productos.findIndex((prod) => prod.id === id)
  console.log (productos[indice])
  console.log (indice)
 return productos[indice]
}
////////////////////////////////////////////

const prodRandom = async (file) => {
  const ran = await randomP(file)
  //console.log (ran)
 }

 const selected = async (file, id) => {
  const selected = await getById(file, id)
  console.log (selected)
}

const All = async (file) => {
  const Alldata = await getAll(file)
  console.log (Alldata)
  return (Alldata)
}

const saveProduct = async (file, data) => {
  await save (file, data)
}

const deleteProduct = async (file, id) => {
  await deleteById (file, id)
}

const deleteProducts = async (file) => {
 await  deleteAll(file)
}



// INVOCACIONES PARA TESTEO
let productos = []
const contenedor = new Contenedor ('productos.json', productos)
//console.log (contenedor.productos.length)
//console.log (productos)

const id = prodRandom (contenedor.archivo)
//console.log (id)
 
//selected (file.archivo, 4)
 /*   saveProduct (file.archivo, {
    "title": "ooo",
    "price": 24500,
    "thumbnail": "/images/brazalete_resized.jpg",
    "id": 5})
*/
//deleteProduct (file.archivo, 4)
//deleteProducts(file.archivo)