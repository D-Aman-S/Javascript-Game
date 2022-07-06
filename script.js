const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d'); // it was called c in the main file
//filling canvas
canvas.width=1026;
canvas.height=576;
context.fillRect(0,0,canvas.width,canvas.height);

const gravity = 0.75

let lastKey

decreaseTimer();

//infinite animation loop
function animate(){
    window.requestAnimationFrame(animate)
    //clearing the older position of players
    context.fillStyle='black';
    context.fillRect(0, 0, canvas.width, canvas.height);
    background.update()
    shop.update()
    //animating shop-not in the video
    animatePlant()
    /////
    player.update()
    //enemy.update

    player.velocity.x=0;
    enemy.velocity.x=0;

    //Player Movement
    player.image=player.Sprites.idle.image
    if(keys.a.pressed && player.lastKey==='a'){
        player.velocity.x=-5
        player.image=player.Sprites.run.image
    }
    else if(keys.d.pressed && player.lastKey==='d'){
        player.velocity.x=5
        player.image=player.Sprites.run.image
    }

    //Enemy Movement
    if(keys.ArrowLeft.pressed && enemy.lastKey==='ArrowLeft'){
        enemy.velocity.x=-5
    }
    else if(keys.ArrowRight.pressed && enemy.lastKey==='ArrowRight'){
        enemy.velocity.x=5
    }

    //Detect for Collision
    if(rectangularCollision({
        rectangle1: player,
        rectangle2: enemy
    }) &&
    player.isAttacking)
        {
            player.isAttacking = false
            console.log('Player Attacked')
           enemy.health-=20
            document.querySelector('#enemyHealth').style.width=enemy.health+'%'
        }


    if(rectangularCollision({
        rectangle1: enemy,
        rectangle2: player
    }) &&
    enemy.isAttacking)
        {
            enemy.isAttacking = false
            console.log('Enemy Attacked')
             player.health-=20
             document.querySelector('#playerHealth').style.width=player.health+'%'
        }
        
        //ending the game based on the heALTH   
        if(enemy.health <=0 || player.health <=0){
                determineWinner({player, enemy, timerId})
        }
}

//calling infinite updation
animate();

//capturing key press events

window.addEventListener('keydown', e=>{ 
   // console.log(e.key)
    switch(e.key){
        
    //player Movement

        case 'd':
            keys.d.pressed=true;
            player.lastKey='d'
            break
        case 'a':
            keys.a.pressed=true;
            player.lastKey='a'
            break
        case 'w':
           player.velocity.y=-22
            break
        case 's':
            player.velocity.y=22
            break
        case ' ':
            player.attack()
            break

    //Enemy Movement

        case 'ArrowRight':
            keys.ArrowRight.pressed=true;
            enemy.lastKey = 'ArrowRight'
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed=true;
            enemy.lastKey = 'ArrowLeft'
            break
        case 'ArrowUp':
            enemy.velocity.y=-22
            break
        case 'ArrowDown':
            enemy.velocity.y=22
            break
        case '/':  //Nearest to the arrow keys
            enemy.attack()
            break 
    }
    
})

//capturing key not pressing 
window.addEventListener('keyup', e=>{
    switch(e.key){
        //Player Keys
        case 'd':
            keys.d.pressed=false;
            break
        case 'a':
            keys.a.pressed=false;
            break

        //Enemy Keys
        case 'ArrowLeft':
            keys.ArrowLeft.pressed=false;
            break
        case 'ArrowRight':
            keys.ArrowRight.pressed=false;
            break
     
    }
})

function animatePlant(){
    tree.update()
    plant.update()
    plant2.update()
    blood.update()
    blood1.update()
   
    house.update()
    floor.update()
    plant3.update()
    plant4.update()
}