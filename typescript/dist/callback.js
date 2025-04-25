"use strict";
// type Callback = (number: number) => void;
// function add(a: number, b: number, callback: Callback) {
//   const result = a + b;
//   callback(result);
// }
// add(100, 200, (result) => {
//   console.log(`The result is: ${result}`);
// });
// // example async 2 looping on typescript
// function asyncLoop<T>(
//   arr: T[],
//   callback: (item: T, index: number) => void
// ): void {
//   let index = 0;
//   function loop() {
//     if (index < arr.length) {
//       callback(arr[index], index);
//       index++;
//       setTimeout(loop, 1000); // Wait for 1 second before processing the next item
//     }
//   }
//   loop();
// }
// const numbers = [1, 2, 3, 4, 5];
// asyncLoop(numbers, (item, index) => {
//   console.log(`Item at index ${index}: ${item}`);
// });
setInterval(() => {
    let d = new Date();
    console.log(`Current time: ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}:${d.getMilliseconds}`);
}, 2000);
