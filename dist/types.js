"use strict";
//boolean (true / false)
var isOpen;
isOpen = true;
//string ('foo', "foo", `foo`)
var message;
message = 'foo';
//number (int, float, hex, binary)
var total;
total = 1;
//array
var items;
items = [1, 2, 3, 4];
var items2;
items2 = ['a', 'b', 'c', 'd', 'e'];
var values; //generic
values = [1, 2, 3, 4];
//tuple
var title;
title = [1, 'foo'];
//enum
var Color;
(function (Color) {
    Color["white"] = "#fff";
    Color["black"] = "#000";
})(Color || (Color = {}));
//any (qualquer coisa) NÃO É LEGAL!!!
var coisa;
coisa = [1, 2, 3, 4];
//void(vazio)
var logger = function () {
    console.log('foo');
};
//never 
var error = function () {
    throw new Error('error');
};
//object
var cart;
cart = {
    key: 'fi'
};
//Type Inference
var message2 = "mensagem definida";
