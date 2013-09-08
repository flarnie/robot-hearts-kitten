Rhk.Views.LevelView = Backbone.View.extend({
	initialize: function (options) {
		this.imgWidth = 90;
		this.canvas_width = options.canvas_width;
		this.canvas_height = options.canvas_height;
		this.ctx = document.getElementById("level-canvas").getContext("2d");
		//the actors
		var that = this;
		// robot
		var robotImg = new Image();
		robotImg.src = "../robot.gif";
		var robot = new Rhk.Models.Movable({
			ctx: that.ctx,
			imageObj: robotImg,
			position: [50, (that.canvas_height / 2)],
			height: that.imgWidth,
			width: that.imgWidth,
			name: "robot"
		});
		//the collection of actors
		this.actors = new Rhk.Collections.Movables([robot]);
	},

	render: function () {
		var that = this;
		this.ctx.clearRect(0, 0, this.canvas_width, this.canvas_height);
		this.actors.each(function (actor) {
			actor.drawSelf();
		});
	},
	
	startAnimation: function () {
		var that = this;
		window.setInterval(function (){
      that.render();
	  }, 22);
		//NOTE: we can't set keydown handler in the events hash
		$(window).on("keydown", null, function (e) {
			that.moveRobot(e);
		})
	},
	
	moveRobot: function (e) {
		var robot = this.actors.findWhere({name: "robot"});
		var speed = 6;
		//TODO: add case statement to move robot based on keycodes
		switch (e.keyCode) {
			case 37:
				robot.move("west", speed);
				break;
			case 38:
				robot.move("north", speed);
			  break;
			case 39:
				robot.move("east", speed);
			  break;
			case 40:
				robot.move("south", speed);
			  break;
		  default:
		    // do nothing
		    break;
		}
	}
})