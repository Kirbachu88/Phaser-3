// Main Menu Scene
class MainMenu extends Phaser.Scene {

}

// Gameplay Scene
class GamePlay extends Phaser.Scene {
    
}

// Game Over Scene
class GameOver extends Phaser.Scene {
    
}

// initialize our variables and the Phaser game
let wordList = {}

let config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    scene: [ MainMenu, GamePlay, GameOver ],
}

let game = new Phaser.Game(config)

// Functions that will be hoisted in JS

// Some initialization function that does some thing
function initFunction() {

}