Rhk.Collections.Boxes = Backbone.Collection.extend({
	model: Rhk.Models.Box,
	getDirectionHint: function (rPos) {
		var kittenPos = null;
		_(this.models).each( function (box) {
			if (box.contents === "kitten") {
				kittenPos = box.position;
			}
		});
		var hintX = Rhk.comparison(rPos[0], kittenPos[0]);
		var hintY = Rhk.comparison(rPos[1], kittenPos[1]);
		return [hintX, hintY];
	}
})