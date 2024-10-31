const screenWidth = 800;
const screenHeight = 600;
const shipSpeed = 10;
let keyA;
let keyS;
let keyD;
let keyW;
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#03187D',
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 }
        }
    }
};
var game = new Phaser.Game(config);
let ship;
let curser;
function preload() {
    this.load.setBaseURL('.');
    this.load.image('background', 'assets/sky.jpg');
    this.load.image('ship', 'assets/phaser-ship.png');
    this.load.image('logo', 'khulong.png')
this.load.image('red', 'red.png')
}
function create() {
    image = this.add.image(        this.cameras.main.width / 2,this.cameras.main.height / 2,'sky')        
    let scaleX = this.cameras.main.width / image.width;
    let scaleY = this.cameras.main.height / image.height;
    let scale = Math.max(scaleX, scaleY);
    image.setScale(scale).setScrollFactor(0);
logo=this.add.sprite(400, 100, 'logo')
    logo.setScale(0.2);    
    curser=this.input.keyboard.createCursorKeys();
    ship = this.add.sprite(100, 100, 'ship');
    ship.setScale(4, 4);
    keyA=this.input.keyboard.addKey(Phaser.input.keyboard.Keycodes.A)
    key=this.input.keyboard.addKey(Phaser.input.keyboard.KeycodesS)
    keyD=this.input.keyboard.addKey(Phaser.input.keyboard.Keycodes.D)
    keyW=this.input.keyboard.addKey(Phaser.input.keyboard.Keycode.W)
}
function update() {
    /**
     *đây là cách dùng mũi tên
     */
    //sprite.flipX= true;
//if(curser.right.isDown){
    //ship.x += shipSpeed;
    //if (ship.x >= screenWidth) {
        //ship.x = 0;
//}     
//ship.flipX = false;
     //if(curser.left.isDown){
        //ship.x -= shipSpeed;       
        //if(ship.x<=0){
            //ship.screenWidth
    //}
        //ship.flipX = true;
//}
     //if(curser.up.isDown){
        //ship.y -= shipSpeed;       
        //if(ship.y<=0){
            //ship.y = screenHeight;
//}
        //ship.flipX = false;
//}
     //if(curser.down.isDown){
        //ship.y += shipSpeed;
        //if (ship.y >= screenHeight) {
            //ship.y = 0;
//    }
if(keyD.isDown){}
    if(keyA.isDown){}
    if(keyW.isDown){}
    if(keyS.isDown){}

}
}
}