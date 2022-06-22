const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())
const port = procces.env.PORT || 5000

app.use(express.static('public'))
app.listen(port ,() =>{

})

