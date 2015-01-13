var appearsLeft = function(girlName) {
	for (var a = 0; a < world.people.length; a++) {
		if (world.people[a].image == Textures.load("")) {
			world.people[a].image = Textures.load("../Pictures/"+girlName+".png");
			world.people[a].x = 50;
			world.people[a].alpha = 0;
			world.people[a].appearing = true;
			break;
		}
	}
}

var appearsRight = function(girlName) {
	for (var b = 0; b < world.people.length; b++) {
		if (world.people[b].image == Textures.load("")) {
			world.people[b].image = Textures.load("../Pictures/"+girlName+".png");
			world.people[b].x = 400;
			world.people[b].alpha = 0;
			world.people[b].appearing = true;
			break;
		}
	}
}

var appearsMid = function(girlName) {
	for (var c = 0; c < world.people.length; c++) {
		if (world.people[c].image == Textures.load("")) {
			world.people[c].image = Textures.load("../Pictures/"+girlName+".png");
			world.people[c].x = 400-(350/2);
			world.people[c].alpha = 0;
			world.people[c].appearing = true;
			break;
		}
	}
}

var disappear = function(girlName) {
	for (var d = 0; d < world.people.length; d++) {
		if (world.people[d].image == Textures.load("../Pictures/"+girlName+".png")) {
			world.people[d].disappearing = true;
			break;
		}
	}
}

var moveLeft = function(girlName) {
	for (var e = 0; e < world.people.length; e++) {
		if (world.people[e].image == Textures.load("../Pictures/"+girlName+".png")) {
			world.people[e].goal = 50;
			world.people[e].moving = true;
		}
	}
}

var moveRight = function(girlName) {
	for (var f = 0; f < world.people.length; f++) {
		if (world.people[f].image == Textures.load("../Pictures/"+girlName+".png")) {
			world.people[f].goal = 400;
			world.people[f].moving = true;
		}
	}
}

var moveMid = function(girlName) {
	for (var g = 0; g < world.people.length; g++) {
		if (world.people[g].image == Textures.load("../Pictures/"+girlName+".png")) {
			world.people[g].goal = 400-(350/2);
			world.people[g].moving = true;
		}
	}
}

var changePic = function(girlName1, girlName2) {
	for (var h = 0; h < world.people.length; h++) {
		if (world.people[h].image == Textures.load("../Pictures/"+girlName1+".png")) {
			world.people[h].image = Textures.load("../Pictures/"+girlName2+".png");
		}
	}
}

var changeBG = function(bg) {
	background.image = Textures.load("../Pictures/background"+bg+".png");
}

var setButtons = function() {
	
}

var doAction = function(action, girlName, other) {
	if (other == 0) {
		action(girlName);
	}
	else {
		action(girlName, other);
	}
}