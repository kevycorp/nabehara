
function setPeople() {
	world.people = [];
	for (var i = 0; i < 3; i++) {
		world.people[i] = new Sprite();
		world.people[i].image = Textures.load("");
		world.people[i].x = 50; world.people[i].y = 100;
		world.people[i].height = 500; 
		world.people[i].width = 350;
		world.people[i].index = 15;
		world.people[i].alpha = 0;
		world.people[i].appearing = false;
		world.people[i].aCount = 0;
		world.people[i].disappearing = false;
		world.people[i].dCount = 0;
		world.people[i].moving = false;
		world.people[i].goal = 0;
		world.addChild(world.people[i]);

		world.people[i].update = function(d) {
			if (this.appearing && this.disappearing) {
				if (this.aCount > this.dCount) this.appearing = false;
				else this.disappearing = false;
			}

			if (this.appearing == true) {
				this.alpha += 0.03;
				this.aCount++;
				if (this.alpha == 1) {
					this.appearing = false;
					this.aCount = 0;
				}
			}
			else if (this.disappearing == true) {
				this.alpha -= 0.03;
				this.dCount++;
				if (this.alpha == 0) {
					this.disappearing = false;
					this.dCount = 0;
					this.image = Textures.load("");
				}
			}

			if (this.moving == true) {
				if (this.x == this.goal) {
					this.moving = false;
				}
				else {
					if (this.x > this.goal) {
						this.x -= 7;
						if (this.x < this.goal) this.x = this.goal;
					} 
					else {
						this.x += 7;
						if (this.x > this.goal) this.x = this.goal;
					}
				}
			}
		}
	}
}