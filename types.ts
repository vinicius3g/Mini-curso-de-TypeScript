//boolean (true / false)
let isOpen: boolean
isOpen = true

//string ('foo', "foo", `foo`)
let message: string
message = 'foo'

//number (int, float, hex, binary)
let total: number
total = 1

//array
let items: number[]
items = [1, 2, 3, 4]

let items2: string[]
items2 = ['a', 'b', 'c', 'd', 'e']

let values: Array<number> //generic
values = [1, 2, 3, 4]

//tuple
let title: [number, string]
title = [1, 'foo']

//enum
enum Color {
    white = '#fff',
    black = '#000'
}

//any (qualquer coisa) NÃO É LEGAL!!!
let coisa: any
coisa = [1, 2, 3, 4]

//void(vazio)
const logger = (): void => {
    console.log('foo')
}

//null || undefined
type Bla = string | undefined

//never 
const error = (): never => {
    throw new Error('error')
}

//object
let cart: object
cart = {
    key: 'fi'
}

//Type Inference
let message2 = "mensagem definida"

