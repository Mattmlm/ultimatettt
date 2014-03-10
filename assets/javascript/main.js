

function TicTacToeBoard(param) {
	// console.log('TicTacToeBoard instantiated');
	this.element = jQuery(param.board)
	// console.log(this.element);
	// this.element[0].addEventListener("click", this, false);
	// jQuery(this.element).on("click", function() {
	// 	console.log(this.id);
	// });

	function TicTacToeSquare(param) {
		this.element = jQuery(param.square);
		var value = "";
		this.setToX = function() {
			value = "X"
			this.element.text("X")
			window.turn = "O"
		}
		this.setToO = function() {
			value = "O"
			this.element.text("O")
			window.turn = "X"
		}
		var self = this;
		jQuery(this.element).on("click", function() {
			if (window.turn == "X") {
				self.setToX();
			} else {
				self.setToO();
			}
		})
	}

	var won = false;
	var value = "";
	this.squares = [];
	for (var i = 0; i < 3; i++) {
		this.squares[i] = [];
		for (var j = 0; j < 3; j++) {
			this.squares[i][j] = new TicTacToeSquare({
				square: '#' + this.element[0].id + ' .tic-tac-toe-square-' + i + '-' + j
			});
		}
	}
}

function UltimateTTTBoard(param) {
	console.log('UltimateTTTBoard instantiated');
	this.element = jQuery(param.board);
	console.log(this.element);
	this.squares = [];
	for (var i = 0; i < 3; i++) {
		this.squares[i] = [];
		for (var j = 0; j < 3; j++) {
			this.squares[i][j] = new TicTacToeBoard({
				board: '#tic-tac-toe-board-' + i + '-' + j
			});
		}
	}
}

jQuery(document).ready(function() {
	window.turn = "X"
	var board = new UltimateTTTBoard({
		board: '.ultimate-ttt-board'
	});
});