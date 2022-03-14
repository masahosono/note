import express from 'express'
import next from 'next'

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handler = app.getRequestHandler()
const server = express()

app.prepare()
    .then(() => {
        server.all('*', (req, res) => {
            return handler(req, res)
        })

        server.listen(3001, () => {
            console.debug(`> Ready on http://localhost:3001`)
        })
    })
    .catch(() => {
        console.error()
        process.exit(1)
    })
