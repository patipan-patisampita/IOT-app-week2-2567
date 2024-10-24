import express from 'express' // import module
import connectMongoDB from './config/db.js'

const app = express() // create app
const port = process.env.PORT || 8080

//Connected to MongoDb database
connectMongoDB()

//Set view/template engine
app.set('view engine','ejs')

//Home page
app.get('/', (req, res) => {
    res.render('index',{title:'Home Page'})
})

app.listen(port, () => {
    console.log(`SERVER is running on http://localhost:${port}`)
})