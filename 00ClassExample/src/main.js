

// Gameplay Scene
class GamePlay extends Phaser.Scene {
    
}

// Game Over Scene
class GameOver extends Phaser.Scene {
    
}

let config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    scene: [ Menu ],
}

// initialize our variables and the Phaser game
const game = new Phaser.Game(config)

// Functions that will be hoisted in JS

// Some initialization function that does some thing
function initFunction() {

}