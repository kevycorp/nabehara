Sounds.load("../Music/Vivacity.mp3");
Sounds.load("../Music/Hyperfun.mp3");
Sounds.loop("../Music/Hyperfun.mp3").volume = 0;
Sounds.loop("../Music/Vivacity.mp3").volume = 0.2;

var toggleSprite = new Sprite();
toggleSprite.image = Textures.load("../Pictures/soundOn.png");
toggleSprite.width = 220 / 7;
toggleSprite.height = 206/7;
var toggleMusic = new Button();
toggleMusic.x = 800-32; toggleMusic.y = 600-32;
toggleMusic.width = 32;
toggleMusic.height = 32;
toggleMusic.addChild(toggleSprite);
world.gui.addChild(toggleMusic);
toggleMusic.func = function(){
  Sounds.toggleMuted();
  tempSprite = toggleSprite;
  toggleMusic.removeChild(toggleSprite);
  toggleSprite = tempSprite;
  if (toggleSprite.image == Textures.load("../Pictures/soundOn.png")) {
    toggleSprite.image = Textures.load("../Pictures/soundOff.png");
  }
  else {
    toggleSprite.image = Textures.load("../Pictures/soundOn.png");
  }
  toggleMusic.addChild(toggleSprite);
}

toggleMusic.func();