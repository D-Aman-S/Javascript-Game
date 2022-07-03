const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d'); // it was called c in the main file
//filling canvas
canvas.width=1026;
canvas.height=576;
context.fillRect(0,0,canvas.width,canvas.height);

const gravity = 0.75
//creating a sprite classs
class Sprite{
    constructor({position, velocity, color = '#A10035', offset}){
        this.position = position;
        this.velocity = velocity;
        this.height = 150;
        this.width = 50;
        this.lastKey 
        this.attackbox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            offset,
            width: 150, //changed the width from 100 to 150
            height: 50
        }
        this.color = color
        this.isAttacking
        this.health=100
    }
    //players look
    draw(){
        context.fillStyle=this.color;
        context.fillRect(this.position.x,this.position.y,this.width,this.height)

        //attack box
        if(this.isAttacking)
        {
        context.fillStyle='#FF869E';
        context.fillRect
            (
                this.attackbox.position.x,
                this.attackbox.position.y,
                this.attackbox.width,
                this.attackbox.height
            )
        }
    }
    update(){
        
        this.draw()
        this.attackbox.position.x = this.position.x + this.attackbox.offset.x
        this.attackbox.position.y = this.position.y

        this.position.x+=this.velocity.x;
        this.position.y += this.velocity.y; // adding y velocity

        //stopping player when touchinng ground

        if(this.position.y+this.height>=canvas.height){
            this.velocity.y = 0;
        }
        else if(this.position.y < 0){
            this.velocity.y = 0;
        }
        else{
            this.velocity.y+=gravity  
        }
        console.log(this.position.y)
    }
    //attackbox

    attack(){
        this.isAttacking = true
        setTimeout(() => {
            this.isAttacking = false
        }, 100)
    }
}

//player object 
const player = new Sprite({
    position:
    {
        x:0,
        y:0
    },
    velocity:
    {
        x:0,
        y:0
    },
    offset:
    {
        x: 0,
        y: 0
    }
})
console.log(player);
//to keep track of key presses


//enemy object
const enemy = new Sprite({
    position:{
        x:400,
        y:50
    },
velocity:{
        x:0,
        y:0
    },
    color: '#FFE7BF',
    offset:
    {
        x: -50,
        y: 0
    }
})
const keys = {
    a:{
        pressed:false
    },
    d:{
        pressed:false
    },
    w:{
        pressed: false
    },
    s:{
        pressed: false
    },
    ArrowLeft:{
        pressed: false
    },
    ArrowRight:{
        pressed: false 
    }
}
let lastKey

function rectangularCollision({rectangle1, rectangle2 }) {
    return(
        rectangle1.attackbox.position.x + rectangle1.attackbox.width >= rectangle2.position.x &&
        rectangle1.attackbox.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.attackbox.position.y + rectangle1.attackbox.height >= rectangle2.position.y &&
        rectangle1.attackbox.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.isAttacking
    )
}
let timer=10;
function decreaseTimer()
{
   
if(timer>0)
{
     setTimeout(decreaseTimer,1000)
timer--
document.querySelector('#timer').innerHTML=timer
}
if(timer==0)
{
if(player.health===enemy.health)
{
  console.log(tie) 
  document.querySelector('#displayText').innerHTML='Tie'
   document.querySelector('#displayText').style.display='flex'  
}
}
}
decreaseTimer();



//infinite animation loop
function animate(){
    window.requestAnimationFrame(animate)
    //clearing the older position of players
    context.fillStyle='black';
    context.fillRect(0, 0, canvas.width, canvas.height);
    player.update()
    enemy.update()

    player.velocity.x=0;
    enemy.velocity.x=0;

    //Player Movement
    if(keys.a.pressed && player.lastKey==='a'){
        player.velocity.x=-5
    }
    else if(keys.d.pressed && player.lastKey==='d'){
        player.velocity.x=5
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