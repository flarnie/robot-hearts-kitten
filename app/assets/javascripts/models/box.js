Rhk.Models.Box = Backbone.Model.extend({
	initialize: function (options) {
		//TODO: make these numbers less 'magical'
		this.grid_origin = [250, 10];
		this.box_size = 18;
		this.margin_size = 26;
		this.color = "#A8845B"
		this.ctx = options.ctx;
		var true_x = (options.position[0] * (this.box_size + this.margin_size)) + this.grid_origin[0];
		var true_y = (options.position[1] * (this.box_size + this.margin_size)) + this.grid_origin[1];
		this.position = [true_x, true_y];
		this.contents = options.contents;
	},
	
	drawSelf: function () {
		var that = this;
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(that.position[0], that.position[1], that.box_size, that.box_size);
	}
})