const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());
// home 
app.get('/',(req,res) => {
    res.send('Recipes Server is running');
})


app.listen(port, () =>{
    console.log("The recipes server is running in the port:", port);
})
