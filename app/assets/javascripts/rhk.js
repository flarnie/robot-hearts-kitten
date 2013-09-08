window.Rhk = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    	console.log('Hello from Backbone!');
			//HACK: find better way to determine page in the future?
			if($("#home-canvas").length){
				console.log("On the homepage");
				var canvas_width = $("#home-canvas").width();
				var canvas_height = $("#home-canvas").height();
				var homeCanvasView = new Rhk.Views.HomeCanvasView({
					canvas_width: canvas_width,
					canvas_height: canvas_height
				});
				homeCanvasView.render();
				homeCanvasView.startAnimation();
			} else if ($("#bootstrapped-level").length){
				var canvas_width = $("#level-canvas").width();
				var canvas_height = $("#level-canvas").height();
				var levelData = JSON.parse($("#bootstrapped-level").html());
				var boxes = levelData.items;
				var levelView = new Rhk.Views.LevelView({
					canvas_width: canvas_width,
					canvas_height: canvas_height,
					boxes: boxes
				});
				levelView.render();
				levelView.startAnimation();
			} else {
				console.log("On some other page");
			}
  }
};

$(document).ready(function(){
  Rhk.initialize();
});
