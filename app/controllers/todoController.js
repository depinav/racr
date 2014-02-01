var Todo    = require('../models/todo');

module.exports = function(app) {

  // Get all todos
  app.get('/api/todos', function(req, res) {

    Todo.find(function(err, todos) {

      if(err) res.send(err);

      res.json(todos);
    });
  });

  // Create new todo
  app.post('/api/todos', function(req, res) {

    Todo.create({ text: req.body.text, done: false },
    function(err, todo) {

      if(err) res.send(err);

      Todo.find(function(err, todos) {

        if(err) res.send(err);

        res.json(todos);
      });
    });
  });
  
  // Delete a todo
  app.delete('/api/todos/:todo_id', function(req, res) {

    Todo.remove({ _id : req.params.todo_id}, function(err, todo) {
      
      if(err) res.send(err);

      Todo.find(function(err, todos) {

        if(err) res.send(err);

        res.json(todos);
      });
    });
  });

  app.get('/todos', function(req, res) {

    res.sendfile('./public/todo.html');
  });
}
