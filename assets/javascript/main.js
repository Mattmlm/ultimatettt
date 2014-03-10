

function TicTacToeBoard() {

	function TicTacToeSquare() {
		var value = "";
		this.setToX = function() {
			value = "X"
		}
		this.setToO = function() {
			value = "O"
		}
	}

	var won = false;
	var value = "";
	this.squares = [];
	for (var i = 0; i < 3; i++) {
		this.squares[i] = [];
		for (var j = 0; j < 3; j++) {
			this.squares[i][j] = new TicTacToeSquare();
		}
	}
}

function UltimateTTTBoard() {
	this.squares = [];
	for (var i = 0; i < 3; i++) {
		this.squares[i] = [];
		for (var j = 0; j < 3; j++) {
			this.squares[i][j] = new TicTacToeBoard();
		}
	}
}

var board = new TicTacToeBoard();