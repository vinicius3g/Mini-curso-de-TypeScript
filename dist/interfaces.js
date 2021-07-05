"use strict";
var tlou = {
    title: "the Last of Us",
    description: "the best game in the world",
    gener: "Action",
    plataform: ["PS3", "PS4",],
    getSimilars: function (title) {
        console.log("Similar games to " + title + ": uncharted, a plague tale, metro....");
    }
};
console.log(tlou.gener);
tlou.getSimilars ? tlou.getSimilars(tlou.title) : '';
var leftbehind = {
    title: "the last of us left behind",
    description: "you play as ellie before the original game",
    gener: "Action",
    plataform: ["PS3", "PS4"],
    originalGame: tlou,
    newContent: ["3 hrs story", "new characters"]
};
var CreateGame = /** @class */ (function () {
    function CreateGame(q, w, e) {
        this.title = q;
        this.description = w;
        this.gener = e;
    }
    return CreateGame;
}());
