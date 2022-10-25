const {Router} = require ('express')

const rutaProductos =  Router()

//GET
rutaProductos.get ('/', async (req, res) => {
	await res.json ({
		data:productos
	})
	})

//GET BY ID
rutaProductos.get ('/:id', async (req, res) => {
		const id = req.params.id
		const indice = productos.findIndex(prod => prod.id == id)

		if (indice<0){
			return res.status (400).json ({msg: "Producto no encontrado"})
		}
	
		//console.log (productos [indice])
		await res.json ({
			data: productos [indice]
		})
		})

//POST
rutaProductos.post ('/',  async (req, res) => {
	const {title, price} = req.body
	console.log (req)
	id = productos.length
	
	if (!title || !price  ){
		return res.status (400).json ({msg: "Se detectan campos sin valor"})
	}

	const nuevoProducto = {
		title, price, id
	}

	productos.push (nuevoProducto)
	console.log (productos)

	await res.send ({
		msg: 'ok',
		data: nuevoProducto
	})
	})

  //PUT
  rutaProductos.put ('/:id',  async (req, res) => {
		const ID =  req.params.id
		const nuevoProd = req.body
		const indice = productos.findIndex(prod => prod.id == ID)

		if (indice<0){
			return res.status (400).json ({msg: "Producto no encontrado"})
		}

		productos[indice] = nuevoProd

		await res.json ({ msg: `Modificando objeto con id ${ID}` ,
		data: productos})
		
	})

 //DELETE BY ID
 rutaProductos.delete ('/:id',  async (req, res) => {
		const ID =  req.params.id

		const indice = productos.findIndex(prod => prod.id == ID)

		if (indice<0){
			return res.json({
				msg:'ok'
			})
		}

		productos.splice(indice, 1)

		await res.json ({ msg: `Eliminando objeto con id ${ID}` ,
		data: productos})
		
	})


module.exports = rutaProductos