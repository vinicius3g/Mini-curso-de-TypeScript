"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//Readonly
var todo = {
    title: "assistir dark de novo",
    description: "relembrar detalhes",
    complete: false
};
console.log(todo);
// todo.complete = true
console.log(todo);
//Partial
var updateTodo = function (todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
};
var todo2 = updateTodo(todo, { complete: true });
console.log(todo2);
var todo3 = {
    title: "fechar assassin creed unity",
    description: "dsadasda"
};
var todo4 = {
    title: "fechar assassin creed unity"
    // description: "dsadasda"
};
