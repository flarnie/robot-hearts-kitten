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
			} else if ($(".bootstrapped-level").length){
				console.log("On Level Page");
			} else {
				console.log("On some other page");
			}
  }
};

$(document).ready(function(){
  Rhk.initialize();
});
