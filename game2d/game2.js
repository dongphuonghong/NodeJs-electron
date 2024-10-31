const gameConfig = {
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
const screenWidth=gameConfig.width
const screenHeight=gameConfig.height
const shipSpeed = 10;
let curser;
let ship;
const game = new Phaser.Game(gameConfig);
function preload() {
    this.load.setBaseURL('https://labs.phaser.io');
    this.load.image('sky', 'assets/skies/sky.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
    this.load.image('background', 'assets/sky.jpg');
    this.load.image('ship', 'assets/phaser-ship.png');
}

function create() {
    const image = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'sky');
    const scale = Math.max(this.cameras.main.width / image.width, this.cameras.main.height / image.height);
    image.setScale(scale).setScrollFactor(0);

    const logo = this.add.sprite(400, 100, 'logo');
    logo.setScale(0.2);
    curser = this.input.keyboard.createCursorKeys();
    ship = this.add.sprite(100, 100,'ship');
}
function update(){
    if (cursor.right.isDown){
        moveShip(shipSpeed,0,screenHeight,screenWidth);
        ship.flipX = false;
    }
    if (cursor.left.isDown){
        moveShip(-shipSpeed,0,screenHeight,screenWidth);
        ship.flipX = true;
}
    if (cursor.up.isDown){
        moveShip(0,-shipSpeed,screenHeight,screenWidth);
        ship.flipX = false;
}
    if (cursor.down.isDown){
        moveShip(0,shipSpeed,screenHeight,screenWidth);
        ship.flipX = false;
}
}
function moveShip(dx, dy, screenWidth, screenHeight) {
    ship.x = Phaser.Math.Wrap(ship.x + dx, 0, screenWidth);
    ship.y = Phaser.Math.Wrap(ship.y + dy, 0, screenHeight);

}