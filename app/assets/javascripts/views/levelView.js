Rhk.Views.LevelView = Backbone.View.extend({
	initialize: function (options) {
		this.imgWidth = 18;
		this.scoreboard_id = options.scoreboard_id;
		this.canvas_width = options.canvas_width;
		this.canvas_height = options.canvas_height;
		this.ctx = document.getElementById("level-canvas").getContext("2d");
		this.time = 0;
		//the actors
		var that = this;
		// robot
		var robotImg = new Image();
		robotImg.src = "../robot.png";
		this.robot = new Rhk.Models.Movable({
			ctx: that.ctx,
			imageObj: robotImg,
			position: [50, (that.canvas_height / 2)],
			height: that.imgWidth,
			width: that.imgWidth,
			name: "robot"
		});
		// boxes
		this.boxes = new Rhk.Collections.Boxes();
		_(options.boxes).each( function (boxData) {
			console.log("box at ", boxData.x, ",", boxData.y , " and contains ", boxData.contents)
			that.boxes.push(new Rhk.Models.Box({
				ctx: that.ctx,
				position: [boxData.x, boxData.y],
				contents: boxData.contents
			}))
		});
	},

	render: function () {
		var that = this;
		this.ctx.clearRect(0, 0, this.canvas_width, this.canvas_height);
		this.robot.drawSelf();
		//NOTE: we only check for collision if the actor is a box
		this.boxes.each(function (box) {
			var found = box.detectCollision(that.robot);
			box.drawSelf();
			if (found === "kitten"){
				$(".meow-box").empty();
				that.kittenFound = true;
			} else if (found === "other") {
				//TODO: get meow in place
				$(".meow-box").html("<p>meow</p>");
				var directionHint = that.boxes.getDirectionHint(that.robot.position);
				var offset = 50;
				var meowX = that.robot.position[0] + (offset * directionHint[0]);
				var meowY = that.robot.position[1] + (offset * directionHint[1]);
				$(".meow-box").css("left", meowX);
				$(".meow-box").css("top", meowY);
			}
		});
		if (that.kittenFound){
			window.clearInterval(this.intervalID2);
			window.clearInterval(this.intervalID1);
			var $winMsg = $("<div></div>").addClass("win-message").text("You found the kitten!");
			var scoreData = {"score": {
					"cookies": that.boxes.countFoundCookies(),
					"score_board_id": this.scoreboard_id,
					"time": this.time
			  }
			}
			var newScoreView = new Rhk.Views.NewScoreView({
				scoreData: scoreData
			});
			$winMsg.append(newScoreView.render().$el);
			$(".canvas-wrapper").append($winMsg);
		}
		$(".cookie-counter").html("<p>COOKIES: "+this.boxes.countFoundCookies()+"</p>");
	},
	
	startAnimation: function () {
		$(".timer").html("<p>"+this.time+"</p>");
		var that = this;
		var intervalID1 = window.setInterval(function (){
      that.render();
	  }, 22);
		//NOTE: we can't set keydown handler in the events hash
		$(window).on("keydown", null, function (e) {
			that.moveRobot(e);
		});
		this.intervalID1 = intervalID1;
		var intervalID2 = window.setInterval(function () {
			that.time += 1;
			$(".timer").html("<p>"+that.time+"</p>");
		}, 1000);
		this.intervalID2 = intervalID2;
		
	},
	
	moveRobot: function (e) {
		var speed = 6;
		//TODO: add case statement to move robot based on keycodes
		switch (e.keyCode) {
			case 37:
				this.robot.move("west", speed);
				break;
			case 38:
				this.robot.move("north", speed);
			  break;
			case 39:
				this.robot.move("east", speed);
			  break;
			case 40:
				this.robot.move("south", speed);
			  break;
		  default:
		    // do nothing
		    break;
		}
	}
})