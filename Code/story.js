
var nl = function(cs, cm, name, message) {
	scene[cs][cm] = new Object();
	scene[cs][cm].speaker = name;
	scene[cs][cm].message = message;
}

world.actions = [];
world.atAction = 0;
var setAction = function(cs, cm, actnum, girlName, other) {
	var t = world.actions.length;
	world.actions[t] = new Object();
	world.actions[t].cs = cs; world.actions[t].cm = cm;
	world.actions[t].actnum = actnum;
	world.actions[t].girlName = girlName;
	world.actions[t].other = other;
}

world.AmountofScenes = 5;
function Story() {
//0,0 can't have an action as it's set up

nl(0, 0, "","Welcome to your school life. You are a member of the Do family, and \nabout to embark on your college Adventures.");

setAction(0,1,appearsRight, "testgirl", 0);
nl(0, 1, "", "Where do you choose to go to school?");

setAction(1,0, changePic, "testgirl", "testgirl2");
nl(1, 0, "","Remember that whatever...");

setAction(1, 1, disappear, "testgirl2", 0);
nl(1, 1, "","Don't fuck it up.");

setAction(1, 2, changeBG, "2", 0)
nl(1, 2, "", "Ok, that's all I'm asking.");

var questions = [];
questions[0] = "Go to college";
questions[1] = "Fucking whatever";
questions[2] = "Get a jerb";
questions[3] = "Jack off all day";
//setAction(1, 3, setButtons, "", )
nl(1, 3, "", "So what are you going to do?");

nl(1, 4, "", "Ok whatever");

}