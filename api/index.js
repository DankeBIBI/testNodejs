const express = require('express')
const app = express()
let data = {
    apiPath:'localhost:8081/get'
}
app.get('/get',(e,r)=>{
    r.status(200)
    r.json(apiPath)
})