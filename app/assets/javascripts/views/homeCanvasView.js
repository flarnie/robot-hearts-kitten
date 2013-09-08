Rhk.Views.HomeCanvasView = Backbone.View.extend({
	render: function () {
		//TODO: full animation
		//for now, just draw a rect.
		var theCanvas = document.getElementById("home-canvas");
		var ctx = theCanvas.getContext("2d");
		ctx.fillStyle = "white";
		ctx.fillRect(50, 25, 150, 100);
	}
});