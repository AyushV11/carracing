class Game{

    getState(){
        database.ref('gameState').on("value", (data)=> {
            gameState= data.val()
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        })
    }

    async start(){

        car1 = createSprite(100,200)
        car2 = createSprite(300,200)
        car3 = createSprite(500,200)
        car4 = createSprite(700,200)
        car1.addImage(car1Img)
        car2.addImage(car2Img)
        car3.addImage(car3Img)
        car4.addImage(car4Img)

        cars=[car1,car2,car3,car4]

        player = new Player()

        form= new Form()
        form.display()

        var countRef= await database.ref('playerCount').once("value")

if(countRef.exists()){
        player.getCount();
}
        
    }

    play (){
        image(trackImg,0,-height*4,width,height*5)
       

        form.greetings.hide()
        textSize(30)
        text ("game start", 200, 200)

        player.getInfoPlayer()
       // console.log(allPlayers);

        if(keyIsDown(UP_ARROW)){
            player.distance += 50;
            player.update()
        }

       

        if(allPlayers !== undefined){
        var newY= 200
        var index=0
        var x=350
       for ( var plr in allPlayers){

        cars[index].x=x
        cars[index].y=height-allPlayers[plr].distance

        if( plr === "player" + player.index){
            camera.position.x=width/2
            camera.position.y=cars[index].y
            fill ("red")
            ellipse( cars[index].x=x, cars[index].y,70,70)
        }
        else{
            fill ("blue")
        }
          // text (allPlayers[plr].name + ";" + allPlayers[plr].distance, 120 , newY)
         //  newY += 50
         drawSprites()
console.log(cars[index].y)
         index++
         x+=200
       }
    }
    }

    win(){
        alert ("you win")
    }
}
