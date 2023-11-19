/* Player class with the given attributes */
class Player {
  health: number;
  strength: number;
  attack: number;

  constructor(health: number, strength: number, attack: number) {
    this.health = health;
    this.strength = strength;
    this.attack = attack;
  }

  /* Roll Dice Method */
  rollTheDice(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  fightToDamage(damage: number): void {
    this.health -= damage;
    if (this.health < 0) {
      this.health = 0;
    }
  }

  isPlayerAlive(): boolean {
    return this.health > 0;
  }
}

/* Magical Arena class */
class MagicalArena {
  players: Player[];
  currentPlayerIndex: number;

  constructor(player1: Player, player2: Player) {
    this.players = [player1, player2];
    this.currentPlayerIndex = 0;
  }

  switchTurn(): void {
    this.currentPlayerIndex = 1 - this.currentPlayerIndex;
  }
}
const playerA = new Player(50, 5, 10);
const playerB = new Player(100, 10, 5);

// Exporting classe to test in test file
export { Player, MagicalArena };
