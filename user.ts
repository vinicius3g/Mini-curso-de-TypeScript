// accountInfo 
//charInfo

type accountInfo = {
    id: number,
    name: string,
    email?: string
}

const account: accountInfo = {
    id: 123,
    name: "vinicius",
    email: "vinicius@gmail.com"
}

type charInfo = {
    nickname: string ,
    level: number
}

const char: charInfo = {
    nickname: 'default',
    level: 25
}

//intersection
type PlayerInfo = accountInfo & charInfo

const player: PlayerInfo = {
    id: 123,
    name: 'vinicius',
    nickname: 'vinic',
    level: 100
}