"use strict";
var logDetails = function (uid, item) {
    console.log("Aproduct with " + uid + " has title " + item);
};
var logInfo = function (uid, user) {
    console.log("Aproduct with " + uid + " has title " + user);
};
var renderPlataform = function (plataform) {
    return plataform;
};
renderPlataform('ios');
logDetails(11, 'test');
logDetails('11', 'test');
logInfo(22, 'etst');
logInfo('22', 'etst');
