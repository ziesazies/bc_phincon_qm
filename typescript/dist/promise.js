"use strict";
// const myPromise = new Promise((resolve, reject) => {
//   const success = true;
//   if (success) {
//     resolve("Promise berhasil!");
//   } else {
//     reject("Promise gagal.");
//   }
// });
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//   setTimeout(() => {
//     resolve("Promise berhasil!");
//   }, 5000);
// });
// myPromise
//   .then((result: unknown) => {
//     console.log.result;
//     console.log.myPromise;
//   })
//   .catch((error) => {
//     console.error(error);
//   });
// fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
//   method: "GET",
// })
//   .then((response) => {
//     return response.json;
//   })
//   .then((data) => {
//     console.log(data);
//   });
//   .catch(error) => {
//     console.log("ERRORNYA INI", console.error()
// );
//     )
//   }
// async function fetchPokemon() {
//   const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
//   const json = await response.json();
//   console.log(json);
// }
// fetchPokemon();
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://pokeapi.co/api/v2/pokemon/ditto");
            const json = yield response.json();
            console.log(json);
        }
        catch (error) {
            console.log(error);
        }
    });
})();
