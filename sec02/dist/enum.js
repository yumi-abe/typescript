"use strict";
var SIZEEnum;
(function (SIZEEnum) {
    SIZEEnum[SIZEEnum["Small"] = 0] = "Small";
    SIZEEnum[SIZEEnum["Medium"] = 1] = "Medium";
    SIZEEnum[SIZEEnum["Large"] = 2] = "Large";
})(SIZEEnum || (SIZEEnum = {}));
console.log(SIZEEnum.Large);
console.log(SIZEEnum[0]);
console.log(SIZEEnum[5]); //エラーがでない
//即時関数になってしまう
//# sourceMappingURL=enum.js.map