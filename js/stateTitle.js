var StateTitle = {
  preload: function(){
     game.load.image("city", "assets/city-scape.png");
     //background fill color : #e9fffe
  },

  create: function (){
     this.city = game.add.tileSprite(0, 0, 600, 100, "city");
     // this.background.autoScroll(400, 10);

  },

  update: function (){
    this.city.tilePosition.x -= 2;

  },

}; //END StateTitle
