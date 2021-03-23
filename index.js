const express = require('express');

const app =express();

app.get('/', (req , res) =>{
        res.send('thank u .....')
})
app.listen(2000, ()=>console.log("port 2000"))