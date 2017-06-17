
class Biblioteki
{
  constructor(){
    this.express = require('express');
    this.routing = require('./Routing');
  }

  getExpress(){
    return this.express();
  }

  getRouting(){
    return new this.routing();
  }

  getViewEngine(){
    return 'ejs';
  }
}

module.exports = Biblioteki;
