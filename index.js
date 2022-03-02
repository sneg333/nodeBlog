const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const posts = [
    {
        title: 'hi1',
        text: 'go1'
    },
    {
        title: 'hi2',
        text: 'go2'
    },
    {
        title: 'hi3',
        text: 'go3'
    },
    {
        title: 'hi4',
        text: 'go4'
    }
]

app.get('/posts', function(req,res) {
    return res.send(posts)
})
app.get('/posts/:id', function(req,res) {
    const id = req.params.id
    return res.send(posts[id])
})

app.post('/posts', function(req,res) {
    const data = req.body
    console.log(data)
    posts.push(data)
    return res.send(posts)
})

app.listen(5000, function() {
    console.log('work it')
})