const express = require('express');
const app = express();
const port = 8000;

//app.get('/',function(req, res){
//    return res.send("homepage")

// })
app.listen(port, function(err){
    if(err){
    //    console.log('Error :' err);
        console.log('Error : ${err}');
    }
        
    console.log(`Server is running on port ${port}`); 

});