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
        else{
            this.velocity.y+=gravity  
        }
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
    }
}
let lasyKey

//infinite animation loop
function animate(){
    window.requestAnimationFrame(animate)
    //clearing the older position of players
    context.fillStyle='black';
    context.fillRect(0, 0, canvas.width, canvas.height);
    player.update()
    enemy.update()

    player.velocity.x=0;
    if(keys.a.pressed && lasyKey==='a'){
        player.velocity.x=-1
    }
    else if(keys.d.pressed && lasyKey==='d'){
        player.velocity.x=1
    }
}

//calling infinite updation
animate();

//capturing key press events

window.addEventListener('keydown', e=>{
    switch(e.key){
        case 'd':
            keys.d.pressed=true;
            lasyKey='d'
            break
        case 'a':
            keys.a.pressed=true;
            lasyKey='a'
            break
    }
})

//capturing key not pressing 
window.addEventListener('keyup', e=>{
    switch(e.key){
        case 'd':
            keys.d.pressed=false;
            break
        case 'a':
            keys.a.pressed=false;
            break
    }
})