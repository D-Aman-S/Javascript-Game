//sprite shop
const shop = new Sprite({
    position: {
      x: 620,
      y: 310
    },
    imageSrc: 'Props/shop.png',
    scale: 2.10,
    framesMax: 6
  })


//creating a background object-not in video
const background = new AnimationObjects({
    position:{
      x:0,
      y:0
    } ,
    imageSrc:'Props/bfight.png' 
  })
  //plant animation
  const plant = new AnimationObjects({
      position:{
        x:900,
        y:480
      } ,
      imageSrc:'Plant/?.png' ,
      scale:0.08,
      numofimg:3
    })
    const plant2 = new AnimationObjects({
      position:{
        x:950,
        y:480
      } ,
      imageSrc:'Plant/?.png' ,
      scale:0.08,
      numofimg:3
    })
    const plant3 = new AnimationObjects({
      position:{
        x:10,
        y:480
      } ,
      imageSrc:'Plant2/?.png' ,
      scale:0.36,
      numofimg:4
    })
    const plant4 = new AnimationObjects({
      position:{
        x:-40,
        y:480
      } ,
      imageSrc:'Plant2/?.png' ,
      scale:0.36,
      numofimg:4
    })
    const blood = new AnimationObjects({
      position:{
        x:-50,
        y:-50
      } ,
      imageSrc:'Blood/5/1_?.png' ,
      scale:2,
      numofimg:16
    })
    const blood1 = new AnimationObjects({
        position:{
          x:880,
          y:-50
        } ,
        imageSrc:'Blood/5/1_?.png' ,
        scale:2,
        numofimg:16
      })
      const tree = new AnimationObjects({
        position:{
          x:760,
          y:198
        } ,
        imageSrc:'Props/tree.png' ,
        scale:1.5
      })
      const house = new AnimationObjects({
        position:{
          x:-30,
          y:250
        } ,
        imageSrc:'Props/house.png' ,
        scale:1.5
      })
      const floor = new AnimationObjects({
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
      },
      imageSrc:'Props/Martial Hero 3/Sprite/Idle.png',
      framesMax: 10,
      scale: 2.5,
      offset: {
        x: 5,
        y:57
      },
      Sprites:{                                          //Player Movement(Martial Art Hero)
        idle:{
          imageSrc: 'Props/Martial Hero 3/Sprite/Idle.png',
          framesMax: 10
        },
        run:{
          imageSrc: 'Props/Martial Hero 3/Sprite/Run.png',
          framesMax: 8
        },
        up: {
          imageSrc: 'Props/Martial Hero 3/Sprite/Going Up.png',
          framesMax: 3
        },
        down: {
          imageSrc: 'Props/Martial Hero 3/Sprite/Going Down.png',
          framesMax: 3
        }
      }
  })

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