class DatabaseConnect
{
  constructor(){
    this.mysql = require('mysql');
  }

  connect(){
    this.con = (this.mysql).createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "studenci"
    });
  }

  getConn(){
    return this.con;
  }

}

module.exports = DatabaseConnect;
