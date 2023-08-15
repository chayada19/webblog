let express = require('express')
const app = express()
 
app.get('/status', function (req,res){
    res.send('Hello nodejs server belong to chayada')
})

app.get('/hello/:name', function (req,res) {
    console.log('hello - ' + req.params.person)
    res.send('sey hello with ' + req.params.person)
   })

let port = 8081
app.listen(port, function(){
    console.log('server running on ' + port)
})
