interface Game {
    title: string;
    description: string;
    readonly gener: string;
    plataform?: string[];
    getSimilars?: (title: string) => void;
}

const tlou: Game = {
    title: "the Last of Us",
    description: "the best game in the world",
    gener: "Action",
    plataform: ["PS3", "PS4",],
    getSimilars: (title: string) => {
        console.log(`Similar games to ${title}: uncharted, a plague tale, metro....`)
    }
}
console.log(tlou.gener)

tlou.getSimilars ? tlou.getSimilars(tlou.title) : ''

interface DLC extends Game {
    originalGame: Game;
    newContent: string[];
}

const leftbehind: DLC = {
    title: "the last of us left behind",
    description: "you play as ellie before the original game",
    gener: "Action",
    plataform: ["PS3", "PS4"],
    originalGame: tlou,
    newContent: ["3 hrs story", "new characters"]
}

class CreateGame implements Game {
    title: string;
    description: string;
    gener: string;

    constructor (q: string, w: string, e: string) {
        this.title = q;
        this.description = w;
        this.gener = e;
    }

}