const express =  require('express'),
	  app     =  express(),
	  path    =  require('path');

app.use(express.static('public'));


app.get('/',function(req,res){
	res.sendFile(path.join(__dirname+'/views/todo_app.html'));
});

app.listen(3000,function(req,res){
	console.log('Server listening on port 3000');
});