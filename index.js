// Config inicial
const express = require('express')
const app = express()

// Forma de ler json / middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// Rota inicial / endpoint
app.get('/', (req, res) => {
    // Mostrar req

    res.json({ message: 'Oi Express! ou Hello world!' })
})

// Entregar uma porta
app.listen(3000)
