"use strict";
var useState = function () {
    var state;
    var getState = function () {
        return state;
    };
    var setState = function (newState) {
        state = newState;
    };
    return { getState: getState, setState: setState };
};
var newState = useState();
newState.setState("foo");
// newState.setState(123)
console.log(newState.getState());
