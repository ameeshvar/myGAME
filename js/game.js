class Game {
    constructor(){

    }
    getGameState(){
    var gameStateRef=database.ref("gameState");
    gameStateRef.on("value",function (data){
        gameState=data.val()})
    }
 updateGameState(state){
     database.ref("/").update({
         gameState:state
     })
 }
 async start(){
    console.log(gameState)
    if(gameState == 0){
         player=new Player();
         var playerCountRef=await database.ref("playerCount").once("value");
         if(playerCountRef.exists()){
         playerCount=playerCountRef.val()
         player.getCount()
         

         }
         form=new Form();
       form.display();
       console.log("help")
    }}}