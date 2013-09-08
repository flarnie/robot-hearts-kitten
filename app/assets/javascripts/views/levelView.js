Rhk.Views.LevelView = Backbone.View.extend({
	initialize: function (options) {
		this.imgWidth = 18;
		this.canvas_width = options.canvas_width;
		this.canvas_height = options.canvas_height;
		this.ctx = document.getElementById("level-canvas").getContext("2d");
		//the actors
		var that = this;
		// robot
		var robotImg = new Image();
		robotImg.src = "../robot.gif";
		this.robot = new Rhk.Models.Movable({
			ctx: that.ctx,
			imageObj: robotImg,
			position: [50, (that.canvas_height / 2)],
			height: that.imgWidth,
			width: that.imgWidth,
			name: "robot"
		});
		// boxes
		this.boxes = new Rhk.Collections.Boxes();
		_(options.boxes).each( function (boxData) {
			console.log("box at ", boxData.x, ",", boxData.y , " and contains ", boxData.contents)
			that.boxes.push(new Rhk.Models.Box({
				ctx: that.ctx,
				position: [boxData.x, boxData.y],
				contents: boxData.contents
			}))
		});
	},

	render: function () {
		var that = this;
		this.ctx.clearRect(0, 0, this.canvas_width, this.canvas_height);
		this.robot.drawSelf();
		this.boxes.each(function (box) {
			box.drawSelf();
		});
	},
	
	startAnimation: function () {
		var that = this;
		window.setInterval(function (){
			//NOTE: we only check for collision if the actor is a box
			that.boxes.each(function (box) {
				box.detectCollision(that.robot);
			});
      that.render();
	  }, 22);
		//NOTE: we can't set keydown handler in the events hash
		$(window).on("keydown", null, function (e) {
			that.moveRobot(e);
		})
	},
	
	moveRobot: function (e) {
		var speed = 6;
		//TODO: add case statement to move robot based on keycodes
		switch (e.keyCode) {
			case 37:
				this.robot.move("west", speed);
				break;
			case 38:
				this.robot.move("north", speed);
			  break;
			case 39:
				this.robot.move("east", speed);
			  break;
			case 40:
				this.robot.move("south", speed);
			  break;
		  default:
		    // do nothing
		    break;
		}
	}
})