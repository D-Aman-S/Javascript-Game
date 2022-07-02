const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d'); // it was called c in the main file
//filling canvas
canvas.width=1026;
canvas.height=576;
context.fillRect(0,0,canvas.width,canvas.height);

const gravity = 0.2
//creating a sprite classs
class Sprite{
    constructor({position, velocity}){
        this.position = position;
        this.velocity = velocity;
        this.height = 150;
        this.lastKey 
    }
    //players look
    draw(){
        context.fillStyle='red';
        context.fillRect(this.position.x,this.position.y,50,this.height)
    }
    update(){
        
        this.draw()

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
}

//player object 
const player = new Sprite({
    position:{
    x:0,
    y:0
},
velocity:{
    x:0,
    y:0
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
        player.velocity.x=-1
    }
    else if(keys.d.pressed && player.lastKey==='d'){
        player.velocity.x=1
    }

    //Enemy Movement
    if(keys.ArrowLeft.pressed && enemy.lastKey==='ArrowLeft'){
        enemy.velocity.x=-1
    }
    else if(keys.ArrowRight.pressed && enemy.lastKey==='ArrowRight'){
        enemy.velocity.x=1
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
           player.velocity.y=-10
            break
        case 's':
            player.velocity.y=10   
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
            enemy.velocity.y=-10
            break
        case 'ArrowDown':
            enemy.velocity.y=10
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