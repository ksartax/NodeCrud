
var Controller = require('./Controller');

class UserController extends Controller
{

  constructor(){
    super();
    this.usersTable = require('./UsersTable');
    this.usersTable = (new this.usersTable());
  }

  index(callback){
    this.usersTable.getUsers(function(err, result){
      callback(null, result);
    });
  }

  profil(callback, id){
    this.usersTable.getUser(function(err, result){
      callback(null, result);
    }, id);
  }

  delete(callback, id){
    this.usersTable.delete(function(err, result){
      callback(null, result);
    }, id);
  }

  addUser(callback, data){
    this.usersTable.add(function(err, result){
      callback(null, result);
    }, data);
  }

}

module.exports = UserController;
