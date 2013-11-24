Rhk.Views.HomeCanvasView = Backbone.View.extend({
	initialize: function (options) {
		this.imgWidth = 90;
		this.canvas_width = options.canvas_width;
		this.canvas_height = options.canvas_height;
		var theCanvas = document.getElementById("home-canvas");
		this.ctx = theCanvas.getContext("2d");
		//the actors
		var that = this;
		// robot
		var robotImg = new Image();
		robotImg.src = "big-robot.png";
		var robot = new Rhk.Models.Movable({
			ctx: that.ctx,
			imageObj: robotImg,
			position: [0, (that.canvas_height / 2)],
			height: that.imgWidth * 2,
			width: that.imgWidth * 2
		});
		//
		// kitten 
		var kittenImg = new Image();
		kittenImg.src = "big-kitten.png";
		var kitten = new Rhk.Models.Movable({
			ctx: that.ctx,
			imageObj: kittenImg,
			position: [(that.canvas_width / 2), (that.canvas_height / 2)],
			height: that.imgWidth,
			width: that.imgWidth
		});
		//the collection of actors
		this.actors = new Rhk.Collections.Movables([robot, kitten]);
	},
	step: function () {
		var that = this;
		this.actors.each(function (actor) {
			actor.move("east", 3);
			//NOTE: Catch them and make them wrap
			if (actor.position[0] > that.canvas_width){
				actor.position[0] = -1 * (that.canvas_width);
			}
		});
	},
	render: function () {
		var that = this;
		this.ctx.clearRect(0, 0, this.canvas_width, this.canvas_height);
		this.actors.each(function (actor) {
			actor.drawSelf();
		});
	},
	startAnimation: function() {
		var that = this;
		window.setInterval(function (){
      that.step();
      that.render();
      that.step();
      that.render();
      that.step();
      that.render();
	  }, 22);
	}
	
});