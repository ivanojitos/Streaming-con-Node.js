var express = require("express");
var app = new express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var Log = require('log'),
    log = new Log('debug')

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index.html');
});

io.on('connection',function(socket){
    socket.on('stream',function(image){
        
       socket.broadcast.emit('stream',image);
    });
});

//nodemon app.js para levantar servidor
    
http.listen(port,function(){
     log.info('Servidor escuchando a travez del puerto %s',port);
});
    
