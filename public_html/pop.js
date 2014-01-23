/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var gameIntro = "This is a game of nonviolent revolution. The aim is to depose a\n\
tyrannical president. You are one of the people organising the revolution. Take \n\
over the city and the presidential palace. Some players are traitors and \n\
counter-revolutionaries, find them and block them or they will block the drive \n\
for justice and freedom! They can also attempt to conspire against our ideals \n\
and turn conflicts into violence. The people cannot win if there is violence,\n\
so end conflict as soon as possible to bring a new government to power.";
var numberOfPlayers = 3;

var deckSize = 71;

function startUP() {
    document.write("<div id=\"intro\">"); 
    document.write(gameIntro);
    document.write("<div>");
    
    setup();
    //removeSetup();
    runGame();
}

function drawGameBoard(){
    //9*7 gameboard
    //drawCitySquares
    //— | # ¤ »   
    //create cityMap
    var citySizeX = 7;
    var citySizeY = 9;
    var x = 0;
    var y = 0;
    var cityMap = new Array(citySizeX,citySizeY);
    cityMap = [[0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0]];
    //place palaces
    drawCityMap(cityMap);
    var rows = 9;
    var cols = 7;
    document.write("<div id=\"playerBar\" class=\"squared\">");
    document.write("<table  border=\"2\">");
    for(var r = 0;r < rows;r++  ){
        document.write("<tr>");
        for(var c = 0;c < cols;c++){
            document.write("<td width=\"40\" height=\"40\">");
            // data data data
            document.write("</td>");
        }
        document.write("</tr>");
    }
    
    document.write("</table>");
    document.write("</div>");
}
function drawCityMap(cityMap) {
    var citySizeX = 7;
    var citySizeY = 9;
    document.write("<div id=\"cityMap\">"); 
    for(var x = 0;x < citySizeX; x++){
        for(var y = 0;y < citySizeY;y++){
            if(cityMap[x][y] === 0){
                document.write("?");                
            }
            console.log("drawing map");
        };
        document.write("<br>");
    };
    document.write("</div>");
}
function setup(){ 
    chooseGameType();
    var players = [];
    players = initialisePlayers(numberOfPlayers);
    
    drawGameBoard();
    //drawPlayerBar();
    //drawHands()
    //rungame
}
function drawPlayerBar(){
    var rows = 4;
    var cols = 2;
    document.write("<div id=\"playerBar\">");
    document.write("<table border=\"2\">");
    for(var r = 0;r < rows;r++  ){
        document.write("<tr>");
        for(var c = 0;c < cols;c++){
            document.write("<td>");
            // data data data
            document.write("</td>");
        }
        document.write("</tr>");
    }
    
    document.write("</table>");
    document.write("</div>");
}

function chooseGameType(){
    document.write("<div id=\"numberMenu\">");
    document.write("<br>Choose the number of players");
    var selectionMenu = "";
    selectionMenu = selectionMenu + "<ul>";
    for (var i = 3 ; i < 11;i++){
        selectionMenu = selectionMenu + "<li> <button type=\"button\" onclick=\"setNumberOfPlayers("+i+")\">"+i+"</button>";    
    }
    selectionMenu = selectionMenu + "</ul>";
    document.write(selectionMenu);    
    document.write("</div>");
    
}
var setNumberOfPlayers = function(number){
    this.number = number;
    removeStartMenu();
    return number;
};

var initialisePlayers = function(numberOfPlayers){
    var allPlayers = [];
    for(var i = 0; i < numberOfPlayers;i++){
        allPlayers[i] = player;
    }
    //set alignments for each player
    setAlignment(numberOfPlayers);
    return allPlayers;
};

var setAlignment = function(number){
    
    var regimistsCount = [1,1,2,2,3,3,3,4];
    var numberOfRegimists = regimistsCount[number];
    var REVOLUTIONARY =  true;
    var REGIMESUPPORTER = false;
    var side = REVOLUTIONARY;
    var playerCards = [];
    
};

var player = {};
    player.alignment = true;
    player.name = "";
    player.hand = [];

function runGame(){
    //for each turn
        //for each player
        //Choose action
        //  place mapCard
        //  block/unblock player
        //  check where the president is
        //  pass and change one card from hand
        //run Action        
        //check end of Game
            //check for victory
    
}

function removeStartMenu(){
    var elem = document.getElementById("numberMenu");
    elem.parentNode.removeChild(elem);
}

var endOfGame = function (deckSize){
    if(drawPile.length === 0){
        //game Ends count the points
    }
};

//drawing the city
function defineMapPiece(direction, mapPieceType){
    
}

function changeDirection(){
    
}
function placeMapPiece(mapPiece, location){
    
}


//To be replaced by pictures of city blocks in aerial view 
var mapPiece4Exits = "# #   # #";

var mapPiece3Exits = "#»#   # #";

var mapPiece2ExitsStraight = "#»#   #»#";

var mapPiece2ExitsTurn = "#»#  »# #";

var mapPiece1Exit = "#»#  »#»#";

var mapPieceNoExit = "# # » # #";

var mapPieceStart = "# # S # #";

var mapPiecePalace = "# # ¤ # #";

var mapPiecePresident = "# # P # #";

var allMapPieces = [];



var allTools = [];
allTools = ["Camera","Camera",
    "Loudspeaker","Loudspeaker",
    "Banner","Banner", "Technician", "Technician", "Technician",
    "Smoke grenade", "Teargas", "Watercannons",
    "Smoke grenade", "Teargas", "Watercannons",
    "Smoke grenade", "Teargas", "Watercannons",
    "Hint",    "Hint",     "Hint",    "Hint",    "Hint", "Hint",
    "Conflict", "Conflict", "Conflict"
    ];
    
allMapPieces.push(mapPieceStart);    
//5 with 4 exits
allMapPieces.push(mapPiece4Exits);
allMapPieces.push(mapPiece4Exits);
allMapPieces.push(mapPiece4Exits);
allMapPieces.push(mapPiece4Exits);
allMapPieces.push(mapPiece4Exits);
//10 with 3 exits
allMapPieces.push(mapPiece3Exits);
allMapPieces.push(mapPiece3Exits);
allMapPieces.push(mapPiece3Exits);
allMapPieces.push(mapPiece3Exits);
allMapPieces.push(mapPiece3Exits);
allMapPieces.push(mapPiece3Exits);
allMapPieces.push(mapPiece3Exits);
allMapPieces.push(mapPiece3Exits);
allMapPieces.push(mapPiece3Exits);
allMapPieces.push(mapPiece3Exits);
//7 with straight
allMapPieces.push(mapPiece2ExitsStraight);
allMapPieces.push(mapPiece2ExitsStraight);
allMapPieces.push(mapPiece2ExitsStraight);
allMapPieces.push(mapPiece2ExitsStraight);
allMapPieces.push(mapPiece2ExitsStraight);
allMapPieces.push(mapPiece2ExitsStraight);
allMapPieces.push(mapPiece2ExitsStraight);
//9 with a turn
allMapPieces.push(mapPiece2ExitsTurn);
allMapPieces.push(mapPiece2ExitsTurn);
allMapPieces.push(mapPiece2ExitsTurn);
allMapPieces.push(mapPiece2ExitsTurn);
allMapPieces.push(mapPiece2ExitsTurn);
allMapPieces.push(mapPiece2ExitsTurn);
allMapPieces.push(mapPiece2ExitsTurn);
allMapPieces.push(mapPiece2ExitsTurn);
allMapPieces.push(mapPiece2ExitsTurn);
//with dead ends
allMapPieces.push(mapPiece1Exit);
allMapPieces.push(mapPiece1Exit);
//with a block
allMapPieces.push(mapPieceNoExit);
allMapPieces.push(mapPieceNoExit);
allMapPieces.push(mapPieceNoExit);
allMapPieces.push(mapPieceNoExit);
allMapPieces.push(mapPieceNoExit);
allMapPieces.push(mapPieceNoExit);
allMapPieces.push(mapPieceNoExit);

allMapPieces.push(mapPiecePresident);

allMapPieces.push(mapPiecePalace);
allMapPieces.push(mapPiecePalace);


var theDeck = [];

// create a deck with all the cards
for (var i = 0; i < (allTools.length); i++){
    theDeck.push(allTools[i]);
}
for (var i = 0; i < (allMapPieces.length); i++){
    theDeck.push(allMapPieces[i]);
}
var drawPile = [];
drawPile = shuffle(theDeck);
function printDrawPile(){
    for (var i = 0; i < (drawPile.length); i++){
        console.log(i + "  " + drawPile[i] + "\n");
    }
}
var hand = function(numberOfPlayers){
    var handSize = 0;
    var hand = [];
    if(numberOfPlayers < 8 ){
        handSize = 5;
        if(numberOfPlayers < 6 ){
            handSize = 6;
        }
    }
    else{ 
        handSize = 4;        
    }
    for(var count = 0; count < handSize; count++){
        hand.push(drawPile.pop());
    }
    return hand;
};

/*
var theDeck = [];

var card = function(){
    var type;
    var map = "";
    var locationOnMap = location();
};

var location = function(x,y){
    this.x = x;
    this.y = y;
    var coordinate = [x,y];
    function getLocation(){
        return coordinate;
    };
};
var discards = [];
*/
//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};