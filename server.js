
const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
  res.send('99 Bottles of beer on the wall')
})



// const express = require('express');
// const app = express();
// const PORT = 3000



// app.get('/', (req, res)=> {
//     res.send(`<h1>99 Bottles of beer on the wall</h1> <a href='/98'>take one down, pass it around</a>`)
   
// })

// app.get('/:number_of_bottles',(req, res)=>{
//     console.log(req.params)
//     const {number_of_bottles}= req.params

//     if (number_of_bottles === "0") {
//         res.send("<a href='/98'>No more beer, start over!</a>");
//       } else if (number_of_bottles < 0 || number_of_bottles > 99) {
//         res.send("<a href='/98'>Not a valid number</a>");
//       }

//     res.send(`<h1>Number of bottles left:${number_of_bottles}</h1><a href='/${number_of_bottles-1}'>take one down, pass it around</a>`)
// })

// // Tell the app to listen on port 3000
// app.listen(3000, function() {
//     console.log('Listening on port: ${PORT}');
//    });