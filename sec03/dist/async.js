"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getDogImage = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = 'https://dog.ceo/api/breeds/image/random';
    const res = yield fetch(url, { method: 'get' })
        .then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('error');
    }).catch(e => { console.log(e.message); });
    console.log(res);
    return res;
});
//# sourceMappingURL=async.js.map