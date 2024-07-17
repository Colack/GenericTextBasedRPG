class Dungeon {
    constructor(numRooms) {
        this.rooms = this.generateRooms(numRooms);
        this.currentRoom = 0;
        this.visitedRooms = [this.currentRoom];
    }

    generateRooms(numRooms) {
        const rooms = [];
        for (let i = 0; i < numRooms; i++) {
            rooms.push({
                description: `Room ${i + 1} of the dungeon.`,
                items: [],
                enemies: [],
            });
        }
    }

    lookAround() {
        return this.rooms[this.currentRoom].description;
    }

    move(direction) {
        if (direction == 'next' && this.currentRoom < this.rooms.length - 1) {
            this.currentRoom++;
            return `You move to the next room. ${this.lookAround()}`;
        } else if (direction == 'previous' && this.currentRoom > 0) {
            this.currentRoom--;
            return `You move to the previous room. ${this.lookAround()}`;
        } else {
            return 'You cannot move in that direction.';
        }
    }
}
