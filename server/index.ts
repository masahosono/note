import express from 'express'
import next from 'next'

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000;

const app = next({ dev })
const handler = app.getRequestHandler()
const server = express()

app.prepare()
    .then(() => {
        server.use(
            express.static('public'))

        server.all('*', (req, res) => {
            return handler(req, res)
        })

        server.listen(port, () => {
            console.debug(`> Ready on http://localhost:${port}`)
        })
    })
    .catch(() => {
        console.error()
        process.exit(1)
    })
