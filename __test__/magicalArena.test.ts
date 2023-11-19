import { Player, MagicalArena } from "../src/index";

// Test case for the Player class, attributes and its methods
describe("Player", () => {
  it("should correctly initialize player attributes", () => {
    const player = new Player(50, 5, 10);
    expect(player.health).toBe(50);
    expect(player.strength).toBe(5);
    expect(player.attack).toBe(10);
  });

  it("should correctly roll the dice", () => {
    const player = new Player(50, 5, 10);
    jest.spyOn(Math, "random").mockReturnValue(0.5);
    expect(player.rollTheDice()).toBe(4);
  });

  it("should correctly decrease health when taking damage", () => {
    const player = new Player(50, 5, 10);
    player.fightToDamage(20);
    expect(player.health).toBe(30);
  });

  it("should not allow negative health", () => {
    const player = new Player(10, 5, 10);
    player.fightToDamage(20);
    expect(player.health).toBe(0);
  });

  it("should correctly determine if the player is alive", () => {
    const alivePlayer = new Player(50, 5, 10);
    const deadPlayer = new Player(0, 5, 10);
    expect(alivePlayer.isPlayerAlive()).toBe(true);
    expect(deadPlayer.isPlayerAlive()).toBe(false);
  });
});

// Test case for the Magical Arena class
describe("Magical Arena", () => {});
