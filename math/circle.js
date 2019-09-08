define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PI = 3.14;
    function calcCircum(diameter) {
        return diameter * exports.PI;
    }
    exports.calcCircum = calcCircum;
});
