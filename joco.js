const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors())


app.listen(3000, function(){
    console.log('listening on 3000')//3000port로 웹서버를 열고 잘 열리면 listening on을 출력해주세요
});

app.get('/user/:id', (req, res) => {
    //const q = req.params
    const q = req.query
    console.log(q) 
    res.send(q.a)   
    //res.json({'id ': q.id })
})