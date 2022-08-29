//Install express server    
const express = require('express');

const path = require('path');   

const app = express();   

const PORT = process.env.PORT || 8080;

// Serve only the static files form the dist directory    
app.use(express.static(__dirname + '/dist/pokedex-app'));

app.get('/*', function(req,res) {  
    res.sendFile(path.join(__dirname+'/dist/pokedex-app/index.html'));   
});  

// Start the app by listening on the default Heroku port    
app.listen(process.env.PORT || 8080, () => {
    console.log('Server started on port' + PORT);
});