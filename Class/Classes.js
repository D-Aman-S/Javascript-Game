//original sprite
class Sprite {
    constructor({
      position,
      imageSrc,
      scale = 1,
      framesMax = 1,
      offset = { x: 0, y: 0 }
    }) {
      this.position = position
      this.width = 50
      this.height = 150
      this.image = new Image()
      this.image.src = imageSrc
      this.scale = scale
      this.framesMax = framesMax
      this.framesCurrent = 0
      this.framesElapsed = 0
      this.framesHold = 11
      this.offset = offset
    }
  
    draw() {
      context.drawImage(
        this.image,
        this.framesCurrent * (this.image.width / this.framesMax),
        0,
        this.image.width / this.framesMax,
        this.image.height,
        this.position.x - this.offset.x,
        this.position.y - this.offset.y,
        (this.image.width / this.framesMax) * this.scale,
        this.image.height * this.scale
      )
    }
  
    animateFrames() {
      this.framesElapsed++
  
      if (this.framesElapsed % this.framesHold === 0) {
        if (this.framesCurrent < this.framesMax - 1) {
          this.framesCurrent++
        } else {
          this.framesCurrent = 0
        }
      }
    }
  
    update() {
      this.draw()
      this.animateFrames()
    }
  }
//my change for animation
class AnimationObjects{
    constructor({position, imageSrc, scale = 1, numofimg=1}){
        this.position = position;
        this.height = 150;
        this.width = 50;
        this.imageSrc=imageSrc
        this.image = new Image()
        this.image.src=this.imageSrc
        this.scale=scale
        this.numofimg=numofimg
        this.imageCounter=0;
        this.holdFrame=50
        this.framerCounter=0
        console.log(this.image.src);

    }
    //players look
    draw(){
            context.drawImage(this.image, this.position.x, this.position.y, this.image.width*this.scale, this.image.height*this.scale)
    }
    update(){
        if(this.numofimg===1){
            this.draw()
        }else{
            if(this.imageCounter<=this.numofimg*this.holdFrame){
                let str= this.imageSrc
                console.log(this.imageSrc);
                this.image.src =str.replace("?", Math.floor(this.imageCounter/this.holdFrame))
                console.log(this.image.src)
                this.draw()
                this.imageCounter++
            }
            else{
                this.imageCounter=0
            }   
        }   
    }
}

//Fighter classs

class Fighter extends Sprite {
    constructor({position,
                velocity,
                color = '#A10035', 
                imageSrc, 
                scale = 1, 
                framesMax = 1, 
                offset = { x: 0, y: 0 },
                Sprites
            })

    {
        super({
            imageSrc,
            scale,
            position,
            framesMax,
            offset

        })

        
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
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 11
        this.Sprites = Sprites

        for(const Sprite in this.Sprites){
            Sprites[Sprite].image = new Image()
            Sprites[Sprite].image.src = Sprites[Sprite].imageSrc
        }
    }
    //players look
    
    update(){
        
        this.draw()
        this.animateFrames()

        this.attackbox.position.x = this.position.x + this.attackbox.offset.x
        this.attackbox.position.y = this.position.y

        this.position.x+=this.velocity.x;
        this.position.y += this.velocity.y; // adding y velocity

        //stopping player when touchinng ground

        if(this.position.y+this.height>canvas.height-18){
            this.velocity.y = -0.25;
        }
        //stopping when too high up
        else if(this.position.y < 0){
            this.velocity.y = 5;
        }
        else{
            this.velocity.y+=gravity  
        }
        // console.log(this.position.y)
    }
    //attackbox

    attack(){
        this.isAttacking = true
        setTimeout(() => {
            this.isAttacking = false
        }, 100)
    }


    switchSprite(){
      switch(Sprite){
          case'idle':
          if(this.image !== this.Sprites.idle.image){
            this.image=this.Sprites.idle.image
            this.framesMax =this.Sprites.idle.framesMax
            this.framesCurrent = 0
          }
          break;
          case'run':
          if(this.image !== this.Sprites.run.image){
          this.image=this.Sprites.run.image
          this.framesMax =this.Sprites.run.framesMax
          this.framesCurrent = 0     
          }
          break;
          case'up':{
          if(this.image !== this.Sprites.up.image)
          this.image = this.Sprites.up.image
          this.framesMax =this.Sprites.up.framesMax
          this.framesCurrent = 0            
          }
          break;

          case'down':{
            if(this.image !== this.Sprites.down.image)
            this.image = this.Sprites.down.image
            this.framesMax =this.Sprites.down.framesMax
            this.framesCurrent = 0    
          }
      }
      

    }
}