const express = require ('express')
const fs = productos = [
	{
		"title": "Ethereal",
		"price": 12500,
		"thumbnail": "/images/Ring_resized.jpg",
		"id": 1
	},
	{
		"title": "Avar",
		"price": 15900,
		"thumbnail": "images/Earrings_resized.jpeg",
		"id": 2
	},
	{
		"title": "Balter",
		"price": 24500,
		"thumbnail": "/images/brazalete_resized.jpg",
		"id": 3
	}
]


//SETEO DE SERVER//////////////////////////////////////////////////////////////////////////////////
const app = express ()
app.use (express.json())
app.use (express.urlencoded({extended: true}))

const PORT = 8080

const server = app.listen(PORT, () => {
  console.log (`Servidor escuchando en puerto ${server.address().port}` )
})

//ENDPOINTS////////////////////////////////////////////////////////////////////////////////////////

//GET
	app.get ('/productos', async (req, res) => {
	await res.json ({
		data:productos
	})
	})

//GET BY ID
	app.get ('/productos/:id', async (req, res) => {
		const id = req.params.id
		const indice = productos.findIndex(prod => prod.id == id)
		//console.log (productos [indice])
		await res.json ({
			data: productos [indice]
		})
		})

//POST
	app.post ('/productos',  async (req, res) => {
	const data =  req.body
	const {title, price, thumbnail, id} = req.body

	if (!title || !price || !thumbnail || !id ){
		return res.status (400).json ({msg: "Se detectan campos sin valor"})
	}

	const nuevoProducto = {
		title, price, thumbnail, id
	}

	productos.push (nuevoProducto)
	console.log (productos)

	await res.json ({
		msg: 'ok',
		data: nuevoProducto
	})
	})

  //PUT

	app.put ('/productos/:id',  async (req, res) => {
		const ID =  req.params.id
		const nuevoProd = req.body
		const indice = productos.findIndex(prod => prod.id == ID)
		productos[indice] = nuevoProd

		await res.json ({ msg: `Modificando objeto con id ${ID}` ,
		data: productos})
		
	})

 //DELETE
	app.delete ('/productos/:id',  async (req, res) => {
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