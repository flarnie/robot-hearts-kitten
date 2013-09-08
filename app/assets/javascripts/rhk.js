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
				var homeCanvasView = new Rhk.Views.HomeCanvasView({
					$el: document.getElementById("home-canvas")
				});
				homeCanvasView.render();
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
