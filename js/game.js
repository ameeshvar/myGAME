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
    }
    player1=createSprite(230,700)
    player2=createSprite(1360,700)
    player1.addImage("player1IMG",player1IMG)
    player2.addImage("player2IMG",player2IMG)
  playerArray=[player1 , player2]
  bg=createSprite(displayWidth/2,displayHeight/2)
  bg.addImage("bgIMG",bgIMG)
  
}

    play(){
       // form.hide()
        text("game start",100,100)
        Player.getAllPlayerInfo()
       // player.getplayersAtEnd()
        if(allPlayers!= undefined ){
            //background()
            var xposition=100
            var yPosition=80
            
            for(var j =1;j<=allPlayers.player1.lifetime;j=j+1){
                image(lifetimeIMG,xposition,yPosition,50,50)
                xposition=xposition+50
            
                console.log(allPlayers.player1.lifetime)
            
            }
            yPosition=yPosition+70
            xposition=100
            for(var j =1;j<=allPlayers.player2.lifetime;j=j+1){
                image(lifetime2IMG,xposition,yPosition,50,50)
                xposition=xposition+50
                
            
                console.log(allPlayers.player1.lifetime)
            
            }

           var index=0
           var x=265
           var y=0
            //var displayPosition=(130)
            for(var i in allPlayers){
            
                index=index+1
                x=x+200
                y=displayHeight-allPlayers[i].distance
                playerArray[index-1].x=x
                playerArray[index-1].y=y
               
                if(index == player.playerCount){
                    playerArray[index-1].shapeColor="red"
                    camera.position.x=displayWidth/2
                    camera.position.y=playerArray[index-1].y
                    ellipse(x,y,60,60)
                }
                 
               
            }

        }
     
     
        drawSprites();

    }
    end(){
       game.updateGameState(2)  
       
    }
}