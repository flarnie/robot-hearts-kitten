Rhk.Views.NewScoreView = Backbone.View.extend({
	initialize: function (options) {
		this.scoreData = options.scoreData;
		this.nextLevelId = options.nextLevelId;
	},
	
	render: function () {
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
		var that = this;
		$.ajax({
			url: "/scoreboards/"+that.scoreData["score"]["score_board_id"]+"/scores",
			type: "POST",
			data: that.scoreData,
			success: function (response) {
				var renderedContent = JST["scores/success"]({
					score_board_id: that.scoreData["score"]["score_board_id"],
					next_level_id: that.nextLevelId
				});
				that.$el.html(renderedContent);
			},
			error: function (response, message) {
				console.log("ERROR.  response: ",response);
				console.log("Message: ",message);
			}
			});
	}
	
});