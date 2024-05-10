"use strict";
const getMemberName = (string) => {
    console.log(string.name);
};
getMemberName({ name: '三苫' });
let memberName;
const addName = (val) => {
    memberName = val;
};
addName('浅野');
console.log(memberName);
//# sourceMappingURL=nonNull.js.map