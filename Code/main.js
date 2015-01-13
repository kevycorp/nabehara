use2D = true;
initGame("canvas");
var local_canvas = document.getElementById('canvas');


//drawing the background
var background = new Sprite();
background.image = Textures.load("../Pictures/background1.png");
background.height = 600;
background.width = 800;
background.x = 0; background.y = 0;
background.index = 20;
world.addChild(background);

//drawing the bottom text box
var textbox = new Sprite();
textbox.image = Textures.load("../Pictures/textbox.png");
textbox.height = 164;
textbox.width = 730;
textbox.x = 35; textbox.y = 400;
textbox.index = 10;
textbox.alpha = 0.9;
world.addChild(textbox);

//drawing the text name slot
var TextFieldName = new TextBox("");
TextFieldName.x = 50; TextFieldName.y = 20;
TextFieldName.dropShadow = true;
TextFieldName.fontSize = 20;
textbox.addChild(TextFieldName);

//drawing the message text
var TextMessage = new TextBox("");
TextMessage.x = 50; TextMessage.y = 50;
TextMessage.dropShadow = false;
TextMessage.fontSize = 18;
textbox.addChild(TextMessage);

//declaring all the people to load, uses people.js
setPeople();

//creates all the scenes and the messages within them; a 2D array
var scene = []; 
for (var j = 0; j < world.AmountofScenes; j++) { 
	scene[j] = []; 
}

world.cs = 0; //cs = current scene
world.addChild(world.cs);
world.cm = 0; //cm = current message
world.addChild(world.cm);

world.gui = new GUI(gInput);
world.addChild(world.gui);

//there's a button over everything that you press to continue the story
var transBG = new Sprite();
transBG.image = Textures.load("../Pictures/transparentBG.png");
transBG.width = 800;
transBG.height = 600;
var continueRect = new BRect();
continueRect.width = 800;
continueRect.height = 600-64;
var continueButton = new Button();
continueButton.y = 32;
continueButton.width = 800;
continueButton.height = 600-64;
continueButton.addChild(transBG);
continueButton.addChild(continueRect);
world.gui.addChild(continueButton);
continueButton.func = function() {
	updateScene(world.cs, ++world.cm);
	if (world.cs == world.actions[world.atAction].cs && world.cm == world.actions[world.atAction].cm) {
		doAction(world.actions[world.atAction].actnum, world.actions[world.atAction].girlName, world.actions[world.atAction].other);
		if (world.atAction < world.actions.length-1) {
			world.atAction++;
		}
	}

	//console.log("cs:"+cs+" cm:"+cm);
}

Story(); //loads the story then starts the game

var updateScene = function(cs, cm){
	if (world.cm < scene[world.cs].length) {
		TextFieldName.text = scene[world.cs][world.cm].speaker;
		TextMessage.text = scene[world.cs][world.cm].message;
	}
	else {
		if (cs < scene.length-1) {
			updateScene(++world.cs, world.cm=0);
		}
		else {
			TextFieldName.text = "HOORAY";
			TextMessage.text = "You are winner!";
		}
	}
}

updateScene(world.cs, world.cm);

world.update = function(d) {
  this.updateChildren(d);
}
