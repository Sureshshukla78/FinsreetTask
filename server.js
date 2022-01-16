const express = require('express');
const app = express();
require('./server/database/connection');
const bodyParser = require('body-parser');
const path = require("path");
const axios = require('axios');
const PORT = process.env.PORT || 8080;
const model = require("./server/model/model");
app.use(bodyParser.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

// load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));


// app.get("/", (req, res)=>{
//     res.json("hello from server")    
// });

app.use('/', require('./server/routes/routes'));

// hitting api to get data from the given api 
// making get request to api

// axios.get('https://api.wazirx.com/api/v2/tickers?$top=10')
//     .then(function (response) {
//         let data = response.data;
//         const objArr = [];
//         //extracting 10 results from hole data
//         Object.keys(data).forEach(key => {
//             if (objArr.length != 10) {
//                 objArr.push(
//                     {
//                         name: key,
//                         data: data[key]
//                     }
//                 )
//             }
//         });
//         // console.log(objArr[1]['data']['base_unit']);
//         for (let i = 0; i < objArr.length; i++) {
//             const finstreetData = new model({
//                 name: objArr[i]['data']['name'],
//                 last: objArr[i]['data']['last'],
//                 buy: objArr[i]['data']['buy'],
//                 sell: objArr[i]['data']['sell'],
//                 volume: objArr[i]['data']['volume'],
//                 baseUnit: objArr[i]['data']['base_unit'],
//             });
//             // console.log(finstreetData);
//             finstreetData.save((err, result) => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     // console.log(result);
//                     console.log("Data stored successfully");
//                 }
//             });
//         }
//     });
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
