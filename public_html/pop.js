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

function startUP(){
    
    document.write(gameIntro);
    setup();
    //removeSetup();
    runGame();
}
function drawGameBoard(){
    //9*7 gameboard
    //drawCitySquares
    //— | # ¤ »
    var cityMap = [[],[]];
    //create cityMap
    var citySizeX = 7;
    var citySizeY = 9;
    for(var x = 0;x < citySizeX; x++){
        for(var y = 0;y < citySizeY;y++){
            cityMap[x][y] = 0;
        };
    };
    
    drawCityMap(cityMap);
}
function drawCityMap(cityMap)
{
    var citySizeX = 7;
    var citysizeY = 9;
    for(var x = 0;x < citySizeX; x++){
        for(var y = 0;y < citySizeY;y++){
            document.write("?");
        };
        document.write("\n");
    };
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
    document.write("<BR>Choose the number of players");
    var selectionMenu = "<div >";
    selectionMenu = selectionMenu + "<li>";
    for (var i = 3 ; i < 11;i++){
        selectionMenu = selectionMenu + "<ul> <button type=\"button\" onclick=\"setNumberOfPlayers("+i+")\">"+i+"</button></ul>";    
    }
    selectionMenu = selectionMenu + "</li>";
    document.write(selectionMenu);
    
    
}
var setNumberOfPlayers = function(number){
    this.number = number;
    return number;
};

var  initialisePlayers = function(numberOfPlayers){
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
    var numberOfRegimists;
    var REVOLUTIONARY =  true;
    var REGIMESUPPORTER = false;
    var side = REVOLUTIONARY;
    
};

var player = function(){
    var alignment = true;
    var name = prompt("What is your name?");
     
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