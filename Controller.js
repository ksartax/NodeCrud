
class Controller
{

  constructor(){
    this.storeConfig = require('./Config');
    this.storeConfig = (new this.storeConfig());
  }

  getLayoutData(){
    var html = { title : this.storeConfig.getTitle() };
    return html;
  }

  getFooterData(){
    var html = { author : this.storeConfig.getAuthor() };
    return html;
  }

}

module.exports = Controller;
