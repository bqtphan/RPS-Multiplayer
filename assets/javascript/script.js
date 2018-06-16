//      INITIALIZE FIREBASE

var config = {
    apiKey: "AIzaSyByfBh5mUAHEJR7W6wixmgzI9NSvvYfKMg",
    authDomain: "rockpaperscissors-f946e.firebaseapp.com",
    databaseURL: "https://rockpaperscissors-f946e.firebaseio.com",
    projectId: "rockpaperscissors-f946e",
    storageBucket: "rockpaperscissors-f946e.appspot.com",
    messagingSenderId: "305828551738"
};
firebase.initializeApp(config);

var database = firebase.database();
var gameLogRef = database.ref("/game");

//    SETTING UP NAME/GAME
var wins = 0;
var losses = 0;

$("#submitName").on("click", function (event) {
    event.preventDefault();     
    var playerName = $("#inputName").val().trim();
    console.log(playerName);
    $("#nameCard").hide();
    $(".rpsButtons").show();
    $(".playerWinLoss").show();
    $("#playerOne").html(playerName);

    database.ref('/players/1/').set({
        player: playerName,
        });
});

$(".btn").on("click", function() {
    var playerOneChoice = $(this).attr("data-choice");
    console.log(playerOneChoice);
    database.ref('/players/1/').push({
        choice: playerOneChoice
    });
});
