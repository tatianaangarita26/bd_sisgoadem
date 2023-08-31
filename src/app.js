import express from 'express'
import clientesRoutes from './routes/clientes.routes.js'
import facturacionRoutes from './routes/facturacion.routes.js'
import empleadosRoutes from './routes/empleados.routes.js'
import platosRoutes from './routes/platos.routes.js'
import productoRoutes from './routes/producto.routes.js'
import proveedoresRoutes from './routes/proveedores.routes.js'
import rolesRoutes from './routes/roles.routes.js'
import indexRoutes from './routes/index.routes.js'
import pedidosRoutes from './routes/pedidos.routes.js'

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api', clientesRoutes)
app.use('/api', facturacionRoutes)
app.use('/api', empleadosRoutes)
app.use('/api', platosRoutes)
app.use('/api', productoRoutes)
app.use('/api', proveedoresRoutes)
app.use('/api', rolesRoutes)
app.use('/api', pedidosRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'EndoPoint No Encontrado'
    })
})

export default app