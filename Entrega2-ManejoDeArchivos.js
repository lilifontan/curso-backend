

const fs = require ('fs')
const path = require ('path')
nombreArchivo = 'productos.json'


//FUNCIONES DE LECTURA Y ESCRITURA DE ARCHIVOS
const readFile = async () => {
  const dato =  await fs.promises.readFile(nombreArchivo, 'utf-8')
  return JSON.parse(dato) 
}

const saveProducts = async (productos) =>{
  const data = JSON.stringify(productos, null, '\t')
  await fs.promises.writeFile(nombreArchivo, data)
}

//FUNCIONES DE GESTIÓN DE CONTENIDO DE ARCHIVOS
const getAll = async () => {
  const productos = await readFile()
  return productos
}

const getById = async (id) => {
  const productos =  await readFile()
  const indice = productos.findIndex((prod) => prod.id === id)
  if (indice <0) {
    console.log ('El producto no existe')
    return null}
  else return productos[indice]
}

const save = async (data) => {
  const productos = await readFile()
  if(!data.title || !data.price) throw new Error ('Producto a almacenar no válido')

  const producto =  {
    "title": data.title,
    "price": data.price,
    "thumbnail": data.thumbnail,
    "id":productos [productos.length-1].id+1
}
productos.push (producto)
saveProducts (productos)
}

const deleteById = async (idBuscado) => {
  const productos = await readFile()

  const indice = productos.findIndex((prod) => prod.id === idBuscado)
  if (indice <0) return

  productos.splice(indice, 1)
  saveProducts(productos)

}

const deleteAll = async () => {
  await saveProducts([])
}


////////////////////////////////////////////

const All = async () => {
  const Alldata = await getAll()
  console.log (Alldata)
}

const selected = async (id) => {
  const selected = await getById(id)
  console.log (selected)
}

const saveProduct = async (data) => {
  await save (data)
}

const deleteProduct = async (id) => {
  await deleteById (id)
}

const deleteProducts = async () => {
 await  deleteAll()
}

// INVOCACIONES PARA TESTEO

All()
//selected (4)

/*saveProduct ({
  "title": "ooo",
  "price": 24500,
  "thumbnail": "/images/brazalete_resized.jpg",
  "id": 5})*/

//deleteProduct (2)

//deleteProducts()

 

  