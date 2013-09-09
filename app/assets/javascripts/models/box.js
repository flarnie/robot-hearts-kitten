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
		this.opened = false;
	},
	
	drawSelf: function () {
		var that = this;

		if (this.opened) {
			this.ctx.strokeStyle = this.color;
			this.ctx.strokeRect(that.position[0], that.position[1], that.box_size, that.box_size);	
			if (this.contents === "kitten") {
				var kittenImg = new Image();
				kittenImg.src = "../kitten.gif";
				var that = this;
				kittenImg.onload = function () {
					that.ctx.drawImage(kittenImg,
						that.position[0]+5, 
						that.position[1]+5, 
						that.box_size-5,
						that.box_size-5);
				};
			} else if (this.contents === "cookie") {
				this.ctx.fillStyle = "#ffe79e";
				var radius = this.box_size / 2;
				var centerX = this.position[0] + radius;
				var centerY = this.position[1] + radius;
				this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false); 
				this.ctx.fill();
			}
		} else {
			this.ctx.fillStyle = this.color;
			this.ctx.fillRect(that.position[0], that.position[1], that.box_size, that.box_size);	
		}
	},
	
	detectCollision: function(obj) {
		//NOTE: taking a shortcut and assumming obj is same size as box
		var ox = obj.position[0];
		var oy = obj.position[1];
	  var xDist = Math.abs(ox - this.position[0]);
	  var yDist = Math.abs(oy - this.position[1]);
		if (xDist < this.box_size && yDist < this.box_size) {
			this.opened = true;
			if (this.contents === "kitten"){
				return "kitten";
			} else {
				return "other";
			}
		}
	}
})