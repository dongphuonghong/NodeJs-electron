const screenWidth = 800;
const screenHeight = 600;
const shipSpeed = 10;
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
let ship;
let curser;
var game = new Phaser.Game(config);
function preload() {
    this.load.setBaseURL('https://labs.phaser.io')
    this.load.image('sky', 'assets/skies/sky.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png')
    this.load.image('red', 'assets/particles/red.png')
        this.load.image('background', 'assets/sky.jpg');    this.load.image('ship', 'assets/phaser-ship.png');
        this.load.image('ship', 'assets/phaser-ship.png');
}
function create() {
 let    image = this.add.image(        this.cameras.main.width / 2,this.cameras.main.height / 2,'sky')        
    let scaleX = this.cameras.main.width / image.width;
    let scaleY = this.cameras.main.height / image.height;
    let scale = Math.max(scaleX, scaleY);
    image.setScale(scale).setScrollFactor(0);
     let logo=this.add.sprite(400, 100, 'logo')
    logo.setScale(0.2);    
    curser=this.input.keyboard.createCursorKeys();
    ship = this.add.sprite(100, 100, 'ship');
    ship.setScale(4, 4);
        }
function update() {
    /**
     *đây là cách dùng mũi tên
     */
     if(curser.right.isDown){
         ship.x += shipSpeed;
         if (ship.x >= screenWidth) {
             ship.x = 0;
         }
         ship.flipX = false;
     }
     if(curser.left.isDown){
         ship.x -= shipSpeed;
         if(ship.x<=0){
             ship.x=screenWidth;
         }
         ship.flipX = true;
     }
     if(curser.up.isDown){
         ship.y -= shipSpeed;
         if(ship.y<=0){
             ship.y=screenHeight;
         }
         ship.flipX = false;
     }
     if(curser.down.isDown){
         ship.y += shipSpeed;
         if (ship.y >= screenHeight) {
             ship.y = 0;
         }
         ship.flipX = false;     
}
    }