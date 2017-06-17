
class Config
{
  constructor(){
    this.title = "Niode Aplikacja";
    this.author = "Damian Stępniak";
  }

  getTitle(){
    return this.title;
  }

  getAuthor(){
    return this.author;
  }

}


module.exports = Config;
