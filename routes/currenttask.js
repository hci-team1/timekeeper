var tasks = require('../tasks.json');
var models = require('../models');
/*
 * GET current task page.
 */

 exports.view = function(req, res) {
 	res.render('currenttask');
/* 	models.Tasks
 		.find()
 		.exec(renderTasks);

 	function renderTasks(err, tasks) {
 		res.render('currenttask', { 'tasks' : tasks});

 		console.log(tasks);
 	}*/
 };

/* exports.addTasks = function(req, res) {
 	//res.render('currenttask');	// CHANGE THIS

 	var task_data = req.body;
 	console.log(task_data);

 	// making a new models.Task under a new variable name
 	var task_input = new models.Tasks ({
		"taskname" : task_data['taskname'],
		"estimatedtime" : task_data['estimatedtime'],
		"location" : task_data['location'],
		"priority" : task_data['priority']
 	});

 	task_input.save(addCallback);

 	function addCallback(err) {
		if(err) console.log(err);

		models.Tasks
 		  .find().exec(showTask);
		// must send an OK response
 	}

  	function showTask(err, tasks){
 		console.log(tasks);
 		res.render('currenttask', {'tasks' : tasks});
 	}
 }

 exports.deleteTasks = function(req, res) {
 	var taskID = req.params.id;

 	// query for the specific task
 		models.Tasks
 		  .find({ "_id": taskID })
 		  .remove()
 		  .exec(deleteCallback);

 	// function being called after delete
 	function deleteCallback(err) {
 		// console output
 		if(err) console.log(err);

 		// must send an OK resposne w/ res.send();
 		res.send();
 	}
 }*/