class Sprite{
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
            if(this.imageCounter<=this.numofimg){
                let str= this.imageSrc
                console.log(this.imageSrc);
                this.image.src =str.replace("?", this.imageCounter)
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

class Fighter{
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
}