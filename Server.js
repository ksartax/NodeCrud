class Server
{

  constructor(){
    this.biblioteki = require('./Biblioteki');
    this.biblioteki = (new this.biblioteki());
  }

  startServer(){
    this.app = (this.biblioteki).getExpress();
    (this.app).listen(3000, function(){
      console.log('Server Wystartował na porcie 3000');
    })
  }

  initRouting(){
    this.routing = (this.biblioteki).getRouting();
    (this.routing).initRouting(this.app);
  }

  initViewMachine(){
    (this.app).set('view engine', (this.biblioteki).getViewEngine());
  }

}

var server = (new Server());
server.startServer();
server.initRouting();
server.initViewMachine();
