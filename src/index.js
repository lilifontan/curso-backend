const server = require('./services/server')
const PORT = 8080

const fs = productos = [
	{
		"title": "Ethereal",
		"price": 12500,
		"id": 1
	},
	{
		"title": "Avar",
		"price": 15900,
		"id": 2
	},
	{
		"title": "Balter",
		"price": 24500,
		"id": 3
	}
]

 server.listen(PORT, () => {
  console.log (`Servidor escuchando en puerto ${PORT}` )
})


server.on ('error', (err) => {
	console.log ('Se detecta el error: ', err )
})


