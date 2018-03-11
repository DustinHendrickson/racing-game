var game;
var character;
var lane;
var score;
var cursors;


window.onload = function(){
  if(screen.width>900){
    game = new Phaser.Game(600, 432, Phaser.AUTO, "phaser-wrapper", null, false, false);
  }
  else{
    game = new
    Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "phaser-wrapper");
  }
  game.state.add("StateTitle", StateTitle);
  game.state.add("StateMain", StateMain);
  game.state.add("StateChoice", StateChoice);
  // game.state.add("mainState", mainState);


  game.state.start("StateTitle");
};
