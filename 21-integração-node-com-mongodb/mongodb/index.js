import express from 'express'
import exphbs from 'express-handlebars'
import productsRouter  from './routers/productsRouter.js'

import conn from './db/conn.js'

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use('/products', productsRouter)
app.use('/create', productsRouter)


app.listen(3000)

