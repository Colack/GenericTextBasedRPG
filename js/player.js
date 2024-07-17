class Player {
    constructor(name) {
        this.name = name;
        
        this.hp = 100;
        this.maxHp = 100;
        this.mp = 50;
        this.maxMp = 50;

        this.str = 10;          // Player Strength
        this.def = 10;          // Player Defense
        this.int = 10;          // Player Intelligence
        this.spd = 10;          // Player Speed
        this.lck = 10;          // Player Luck
        this.wlp = 10;          // Player Willpower
        this.mor = 10;          // Player Morality

        /*
            Each Stat will have a different effect on the player's abilities.
            Each Stat also has a special effect that has a chance to trigger at the start of battle.

            Strength: 'Overcome' - Increases the player's attack power by 50% for 3 turns.
            Defense: 'Endure' - 100% / sqrt(Defense) chance to endure an attack, taking no damage. Can only trigger once per battle.
            Intelligence: 'Focus' - Chance to find the opponent's weakness, permanently adding it to the player's list of known weaknesses.
            Speed: 'Quickstrike' - Even if the player was ambushed, they will always attack first.
            Luck: 'Fortune' - Increases the chance of rare items / rare enemies appearing.
            Willpower: 'Resolve' - Increases the player's resistance to status effects.
            Morality: 'Judgement' - Increases the player's attack power by 50% against enemies with known weaknesses.
        */

        this.abilities = [];        // List of abilities the player has learned. Player starts with 1 chosen ability.
        this.knownAffinities = [];  // List of known weaknesses and resistances of enemies. Player starts with none.

        this.inventory = [];        // List of items the player has collected.
        this.gold = 0;              // Amount of gold the player has collected.
        this.equipment = {};        // List of equipment the player is wearing.
        this.quests = [];           // List of quests the player has accepted.
        
        this.currentQuest = null;   // The quest the player is currently working on.
        this.completedQuests = [];  // List of quests the player has completed.
        this.failedQuests = [];     // List of quests the player has failed.

        this.location = null;       // The location the player is currently in.

        this.battleHistory = [];    // List of battles the player has fought in.

        this.level = 1;             // The player's current level.
        this.exp = 0;               // The player's current experience.
        this.expToNextLevel = 100;  // The amount of experience needed to reach the next level.

        this.statusEffects = [];    // List of status effects the player is currently affected by.

        this.affinities = {
            fire: 0,
            water: 0,
            earth: 0,
            wind: 0,
            light: 0,
            dark: 0
        };  // The player's elemental affinities. 0 = neutral, 1 = weak, 2 = strong. Equipment and Skills can change these values.
    }

    takeDamage(amount) {
        this.hp -= amount;
        if (this.hp < 0) {
            this.hp = 0;
        }
    }

    heal(amount) {
        this.hp += amount;
        if (this.hp > this.maxHp) {
            this.hp = this.maxHp;
        }
    }

    addItem(item) {
        this.inventory.push(item);
    }

    removeItem(item) {
        const index = this.inventory.indexOf(item);
        if (index > -1) {
            this.inventory.splice(index, 1);
        }
    }

    displayStatus(characterDialogue) {
        return `${characterDialogue} ${this.name} - Level ${this.level} - HP: ${this.hp}/${this.maxHp} - MP: ${this.mp}/${this.maxMp}`;
    }
}
