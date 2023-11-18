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
}

/* Magical Arena class */
class MagicalArena {}

// Exporting classe to test in test file
export { Player, MagicalArena };
