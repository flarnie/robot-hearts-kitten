Rhk.Views.NewScoreView = Backbone.View.extend({
	initialize: function (options) {
		this.scoreData = options.scoreData;
		this.nextLevelId = null; //TODO: make this actually filled
	},
	
	render: function () {
		console.log("rendering the new score view!");
		var renderedContent = JST["scores/new"]({
			
		});
		this.$el.html(renderedContent);
		return this;
	},
	
	events: {
		"keypress": "parseKey"
	},
	
	parseKey: function (e) {
		if (e.keyCode === 13){
			e.preventDefault();
			this.submitScore();
		}
	},
	
	submitScore: function () {
		var username = $("#score_username").val();
		this.scoreData["score"]["username"] = username;
		console.log(this.scoreData);
		var that = this;
		$.ajax({
			url: "/scoreboards/"+that.scoreData["score"]["score_board_id"]+"/scores",
			type: "POST",
			data: that.scoreData,
			success: function (response) {
				console.log("SUCCESS.  response: ",response);
				//TODO: link to next level if there is one!
				var renderedContent = JST["scores/success"]({
					score_board_id: that.scoreData["score"]["score_board_id"],
					next_level_id: that.nextLevelId
				});
				//TODO: will this work?
				console.log(renderedContent);
				that.$el.html(renderedContent);
			},
			error: function (response, message) {
				console.log("ERROR.  response: ",response);
				console.log("Message: ",message);
			}
			});
	}
	
});