// const myPromise = new Promise((resolve, reject) => {
//   const success = true;
//   if (success) {
//     resolve("Promise berhasil!");
//   } else {
//     reject("Promise gagal.");
//   }
// });

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

(async function () {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
})();
