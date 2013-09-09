window.Rhk = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  comparison: function (n1, n2) {
	  if (n1 > n2) {
		return -1;
		} else if (n1 < n2) {
			return 1; 
		} else if (n1 === n2) {
			return 0;
		}
	},
  initialize: function() {
			//HACK: find better way to determine page in the future?
			if($("#home-canvas").length){
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
				var scoreboard_id = levelData.scoreboard_id;
				var levelView = new Rhk.Views.LevelView({
					canvas_width: canvas_width,
					canvas_height: canvas_height,
					boxes: boxes,
					scoreboard_id: scoreboard_id
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
