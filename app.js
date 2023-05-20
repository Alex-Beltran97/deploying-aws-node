const express = require('express');
const PORT = 3000;
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client')));

app.listen(PORT,()=>{
  console.log(`Listening in port http://localhost:${ PORT }`);
});

app.get('/',(req,res)=>{
  res.send('<h1 style="color:blue">Hello World</h1>');
})

