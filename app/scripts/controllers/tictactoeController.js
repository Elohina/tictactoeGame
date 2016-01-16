'use strict';

/**
 * @ngdoc function
 * @name tictactoeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tictactoeApp
 */
angular.module('tictactoeApp',[])
  .controller('tictactoeController', ['$scope', function($scope) {

  $scope.init = function() {
    $scope.currentPlayer = 'X';
    $scope.board = [[{value:"·"},{value:"·"},{value:"·"}],[{value:"·"},{value:"·"},{value:"·"}],[{value:"·"},{value:"·"},{value:"·"}]];
    $scope.winnerMessage = "";
    $scope.turnMessage = "Your turn ";
    $scope.countForATie = 0;
  }

  $scope.init();

  var changePlayer = function() {
    $scope.currentPlayer = $scope.currentPlayer == 'X' ? 'O' : 'X';
  }

  var checkRows = function() {
    var board = $scope.board;
    for (var i = 0; i < board.length; i++) {
      if (board[i][0].value == board[i][1].value && board[i][0].value == board[i][2].value && board[i][0].value != "·") {
        return true;
      }
    }
    return false;
  }

  var checkColumns = function() {
    var board = $scope.board;
    for (var i = 0; i < board.length; i++) {
      if (board[0][i].value == board[1][i].value && board[0][i].value == board[2][i].value && board[0][i].value != "·") {
        return true;
      }
    }
    return false;
  }

  var checkDiagonals = function() {
    var board = $scope.board;
    if ((board[0][2].value == board[1][1].value && board[0][2].value == board[2][0].value && board[0][2].value != "·") || (board[0][0].value == board[1][1].value && board[0][0].value == board[2][2].value && board[0][0].value != "·")) {
      return true;
    }
    return false;
  }

  var endOfGame = function() {
    if(checkRows() || checkColumns() || checkDiagonals()) {
      return true;
    }
    return false;
  }

  $scope.click_cell = function(cell) {
    cell.value = $scope.currentPlayer;
    if(endOfGame()==false) {
      changePlayer();
      $scope.countForATie++;
      if ($scope.countForATie == 9) {
        $scope.winnerMessage = "Tie!";
        $scope.currentPlayer = "";
        $scope.turnMessage = "";
      }
    } else {
      $scope.winnerMessage = $scope.currentPlayer + " won!! Congratulations!!";
      $scope.currentPlayer = "";
      $scope.turnMessage = "";
    }
  }
}]);
