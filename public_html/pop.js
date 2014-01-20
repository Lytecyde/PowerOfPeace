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
    document.write("<div>");
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

var player = function(){
    var alignment;
    var name = "";
     
};
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
    if(decksize === 0){
        //game Ends count the points
    }
};
/*
var theDeck = function(){
    var allCards = [];
    return allCards;
};

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
