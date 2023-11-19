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

  playTurn(): void {
    const attacker = this.players[this.currentPlayerIndex];
    const defender = this.players[1 - this.currentPlayerIndex];

    const diceRoleByAttacker = attacker.rollTheDice();
    const diceRoleByDefender = defender.rollTheDice();

    const damage =
      diceRoleByAttacker * attacker.attack -
      diceRoleByDefender * defender.strength;

    if (damage > 0) {
      defender.fightToDamage(damage);
    }
    this.switchTurn();
  }

  /* Play games untill the one player loses */
  playGame(): void {
    while (this.players[0].isPlayerAlive() && this.players[1].isPlayerAlive()) {
      this.playTurn();
    }

    const winner = this.players.find((player) => player.isPlayerAlive());
    if (!winner) {
      console.log("It's a tie!");
    } else {
      const declareWinner = `Player ${
        winner === this.players[0] ? "A" : "B"
      } is winner of game!`;
      console.log(declareWinner);
    }
  }
}

const playerA = new Player(50, 5, 10);
const playerB = new Player(100, 10, 5);
const arena = new MagicalArena(playerA, playerB);
arena.playGame();

// Exporting classe to test in test file
export { Player, MagicalArena };
