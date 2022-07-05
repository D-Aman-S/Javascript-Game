//creating a background object

const background = new Sprite({
    position:{
      x:0,
      y:0
    } ,
    imageSrc:'Props/bfight.png' 
  })
  //plant animation
  const plant = new Sprite({
      position:{
        x:900,
        y:480
      } ,
      imageSrc:'Plant/?.png' ,
      scale:0.08,
      numofimg:9
    })
    const plant2 = new Sprite({
      position:{
        x:950,
        y:480
      } ,
      imageSrc:'Plant/?.png' ,
      scale:0.08,
      numofimg:9
    })
    const plant3 = new Sprite({
      position:{
        x:10,
        y:480
      } ,
      imageSrc:'Plant2/?.png' ,
      scale:0.36,
      numofimg:10
    })
    const plant4 = new Sprite({
      position:{
        x:-40,
        y:480
      } ,
      imageSrc:'Plant2/?.png' ,
      scale:0.36,
      numofimg:10
    })
    const blood = new Sprite({
      position:{
        x:-50,
        y:-50
      } ,
      imageSrc:'Blood/5/1_?.png' ,
      scale:2,
      numofimg:16
    })
    const blood1 = new Sprite({
        position:{
          x:880,
          y:-50
        } ,
        imageSrc:'Blood/5/1_?.png' ,
        scale:2,
        numofimg:10
      })
      const tree = new Sprite({
        position:{
          x:715,
          y:198
        } ,
        imageSrc:'Props/tree.png' ,
        scale:1.5
      })
      const house = new Sprite({
        position:{
          x:-30,
          y:250
        } ,
        imageSrc:'Props/house.png' ,
        scale:1.5
      })
      const floor = new Sprite({
        position:{
          x:350,
          y:552
        } ,
        imageSrc:'Props/flloor.png' ,
        scale:1.5,
      })
  
  
  //player object 
  const player = new Fighter({
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
  const enemy = new Fighter({
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
          x: -100,
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