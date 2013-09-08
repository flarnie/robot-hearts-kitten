Rhk.Views.HomeCanvasView = Backbone.View.extend({
	initialize: function (options) {
		this.imgWidth = 90;
		this.canvas_width = options.canvas_width;
		this.canvas_height = options.canvas_height;
		var theCanvas = document.getElementById("home-canvas");
		this.ctx = theCanvas.getContext("2d");
		//the actors
		var that = this;
		var kittenImg = new Image();
		kittenImg.src = "kitten.gif";
		var kitten = new Rhk.Models.Movable({
			ctx: that.ctx,
			imageObj: kittenImg,
			position: [100, 100],
			height: that.imgWidth,
			width: that.imgWidth
		});
		//the collection of actors
		this.actors = new Rhk.Collections.Movables([kitten]);
	},
	step: function () {
		var that = this;
		this.actors.each(function (actor) {
			actor.move("east", 3);
			//NOTE: 700 is canvas width
			//Catch them and make them wrap
			if (actor.position[0] > that.canvas_width){
				actor.position[0] = 0;
			}
		});
	},
	render: function () {
		var that = this;
		//TODO: make robot an actor object in the collection
		var robotImg = new Image();
		robotImg.src = "robot.gif";
		robotImg.onload = function () {
			that.ctx.drawImage(robotImg, 0, 0, that.imgWidth + 90, that.imgWidth + 90);
		}
		//
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
			//testing
			// that.actors.each(function (actor) {
			// 	console.log(actor.position);
			// });
	  }, 62);
	}
	
});