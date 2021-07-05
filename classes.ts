abstract class UserAccount {
    public name: string;
    protected age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    logDetails(): void {
        console.log(`the player ${this.name} is ${this.age} years old`);
    }
}

class CharAccount extends UserAccount {
    private nickname: string;
    public level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age);

        this.nickname = nickname;
        this.level = level;
    }

    get getLevel() {
        console.log("-------GET---------")
        return this.level 
    }

    set setLevel(level: number) {
        this.level = level
    }

    logCharDetails(): void {
        console.log(`the player ${this.name} is ${this.age} and has a char ${this.nickname} at level ${this.level}`);
    }
}


// const vinic = new UserAccount('default', 23)

const john = new CharAccount('john', 33, 'Johnmaster', 55)

// console.log(john.age)
console.log(john)

console.log(john.level)

// vinic.logDetails()
john.logCharDetails()

john.setLevel =999
console.log(john.getLevel)