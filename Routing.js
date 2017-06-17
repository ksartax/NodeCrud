
class Routing
{

  constructor(){
    this.urlencodedParser = require('body-parser').urlencoded({ extended: false });
  }

  initRouting(app){
    app.get('/', function (req, res) {
      var userController = require('./UserController');
      userController = (new userController());
      res.render('index', { layout : userController.getLayoutData(), footer : userController.getFooterData() });
    });

    app.get('/users', function(req, res) {
      var userController = require('./UserController');
      userController = (new userController());
      userController.index(function(err, result){
        res.render('users', { layout : userController.getLayoutData(), footer : userController.getFooterData(), users : result });
      });
    });

    app.get('/users/profil/:id', function(req, res){
      var userController = require('./UserController');
      userController = (new userController());
      userController.profil(function(err, result){
        res.render('profil', { layout : userController.getLayoutData(), footer : userController.getFooterData(), user : result });
      }, req.params.id)
    });

    app.get('/users/kasuj/:id', function(req, res){
      var userController = require('./UserController');
      userController = (new userController());
      userController.delete(function(err, result){
        res.redirect('/users');
      }, req.params.id)
    });

    app.post('/users/add',this.urlencodedParser, function(req, res){
      var userController = require('./UserController');
      userController = (new userController());
      userController.addUser(function(err, result){
        res.redirect('/users');
      }, req.body);
    });

  }

}

module.exports = Routing;
