import { Player, MagicalArena } from "../src/index";

// Test case for the Player class, attributes and its methods
describe("Player", () => {
  /* Test case - 1 */
  it("should correctly initialize player attributes", () => {
    const player = new Player(50, 5, 10);
    expect(player.health).toBe(50);
    expect(player.strength).toBe(5);
    expect(player.attack).toBe(10);
  });

  /* Test case - 2 */
  it("should correctly roll the dice", () => {
    const player = new Player(50, 5, 10);
    jest.spyOn(Math, "random").mockReturnValue(0.5);
    expect(player.rollTheDice()).toBe(4);
  });

  /* Test case - 3 */
  it("should correctly decrease health when taking damage", () => {
    const player = new Player(50, 5, 10);
    player.fightToDamage(20);
    expect(player.health).toBe(30);
  });

  /* Test case - 4 */
  it("should not allow negative health", () => {
    const player = new Player(10, 5, 10);
    player.fightToDamage(20);
    expect(player.health).toBe(0);
  });

  /* Test case - 5 */
  it("should correctly determine if the player is alive", () => {
    const alivePlayer = new Player(50, 5, 10);
    const deadPlayer = new Player(0, 5, 10);
    expect(alivePlayer.isPlayerAlive()).toBe(true);
    expect(deadPlayer.isPlayerAlive()).toBe(false);
  });
});

// Test case for the Magical Arena class
describe("Magical Arena", () => {
  /* Test case - 1 */
  it("should correctly initialise the players in the arena", () => {
    const playerA = new Player(50, 5, 10);
    const playerB = new Player(100, 10, 5);

    const arena = new MagicalArena(playerA, playerB);

    expect(arena.players).toEqual([playerA, playerB]);
    expect(arena.currentPlayerIndex).toBe(0);
  });

  /* Test case - 2 */
  it("should switch turns correctly", () => {
    const playerA = new Player(50, 5, 10);
    const playerB = new Player(100, 10, 5);

    const arena = new MagicalArena(playerA, playerB);

    expect(arena.currentPlayerIndex).toBe(0);
    arena.switchTurn();
    expect(arena.currentPlayerIndex).toBe(1);
    arena.switchTurn();
    expect(arena.currentPlayerIndex).toBe(0);
  });

  /* Test case - 3 */
  it("should play a turn and update player health accordingly", () => {
    const playerA = new Player(50, 5, 10);
    const playerB = new Player(100, 10, 5);

    const arena = new MagicalArena(playerA, playerB);

    jest.spyOn(playerA, "rollTheDice").mockReturnValue(5);
    jest.spyOn(playerB, "rollTheDice").mockReturnValue(2);

    arena.playTurn();
    expect(playerB.health).toBe(70);
  });

  /* Test case - 4 */
  it("should correctly determine the winner of the game", () => {
    const playerA = new Player(50, 5, 10);
    const playerB = new Player(100, 10, 5);

    const arena = new MagicalArena(playerA, playerB);

    // Simulate a game where player A wins
    jest.spyOn(playerA, "isPlayerAlive").mockReturnValueOnce(true);
    jest.spyOn(playerB, "isPlayerAlive").mockReturnValueOnce(false);

    const consoleSpy = jest.spyOn(console, "log");

    arena.playGame();

    expect(consoleSpy).toHaveBeenCalledWith("Player A is winner of game!");
  });
});
