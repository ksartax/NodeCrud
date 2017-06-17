
var DatabaseConnect = require('./DatabaseConnect');

class UsersTable extends DatabaseConnect
{

  constructor(){
    super();
    this.connect();
  }

  getUsers(callback){
    var con = (this.getConn());
    con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT imie,nazwisko,id_studenta FROM studenci", function (err, result) {
        if (err) throw err;
        callback(null, result);
      });
    });
  }

  getUser(callback, id){
    var con = (this.getConn());
    con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT imie,nazwisko,id_studenta FROM studenci WHERE id_studenta = ?", [id], function (err, result) {
        if (err) throw err;
        callback(null, result);
      });
    });
  }

  delete(callback, id){
    var con = (this.getConn());
    con.connect(function(err) {
      if (err) throw err;
      con.query("DELETE FROM studenci WHERE id_studenta = ?", [id], function (err, result) {
        if (err) throw err;
        callback(null, result);
      });
    });
  }

  add(callback, data){
    var con = (this.getConn());
    con.connect(function(err) {
      if (err) throw err;
      con.query("INSERT INTO studenci (imie, nazwisko) VALUES (?,?) ", [data.imie, data.nazwisko], function (err, result) {
        if (err) throw err;
          callback(null, result);
      });
    });
  }

}

module.exports = UsersTable;
