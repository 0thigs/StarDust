export var KeyboardState;
(function (KeyboardState) {
    KeyboardState[KeyboardState["UNKNOWN"] = 0] = "UNKNOWN";
    KeyboardState[KeyboardState["OPENING"] = 1] = "OPENING";
    KeyboardState[KeyboardState["OPEN"] = 2] = "OPEN";
    KeyboardState[KeyboardState["CLOSING"] = 3] = "CLOSING";
    KeyboardState[KeyboardState["CLOSED"] = 4] = "CLOSED";
})(KeyboardState || (KeyboardState = {}));
