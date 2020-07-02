import defaultCharacter from './domain';

class Game {
    start() {
      console.log('game started');
    }
  }

  const defaultGame = new Game();
  export default defaultGame;
  
  export class GameSavingData {
  }
  
  export function readGameSaving() {
  }
  
  export function writeGameSaving() {
  }