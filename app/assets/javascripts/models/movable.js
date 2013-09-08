Rhk.Models.Movable = Backbone.Model.extend({
	initialize: function (options) {
		this.name = options.name;
		this.ctx = options.ctx;
		this.imageObj = options.imageObj;
		this.position = options.position;
		this.height = options.height;
		this.width = options.width;
		var that = this;
		this.imageObj.onload = function () {
			that.ctx.drawImage(that.imageObj, 
				that.position[0], 
				that.position[1], 
				that.width,
				that.height);
		};
	},
	
	dirs: {
		"north": [0, -1],
		"south": [0, 1],
		"east": [1, 0],
		"west": [-1, 0]
	},
	
	move: function (dir, distance) {
		var oldX = this.position[0];
		var oldY = this.position[1];
		var newPos = this.dirs[dir];
		var newX = newPos[0];
		var newY = newPos[1];
		this.position = [oldX + (newX * distance), oldY + (newY * distance)];
	},
	
	drawSelf: function () {
		var that = this;
		that.ctx.drawImage(that.imageObj, 
			that.position[0], 
			that.position[1], 
			that.width,
			that.height);
	}
	
})