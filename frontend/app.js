const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello FrontEnd FileUpload!'))
app.listen(port, () => console.log(`FrontEnd listening on port ${port}!`))