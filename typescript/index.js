function hitungBilanganGanjil(n) {
  // Tulis kode di sini
  let count = 0;
  for (i = 0; i < n; i++) {
    if (i % 2 == 1) {
      count++;
    }
  }
  return count;
}

console.log(hitungBilanganGanjil(10));
console.log(hitungBilanganGanjil(20));

function cekTahunKabisat(tahun) {
  // Tulis kode di sini
  return (tahun % 4 == 0 && tahun % 100 != 0) || tahun % 400 == 0;
}

console.log(cekTahunKabisat(2020));
console.log(cekTahunKabisat(2021));

function hitungFaktorial(n) {
  // Tulis kode di sini
  if (n === 0) {
    return 1;
  } else {
    return n * hitungFaktorial(n - 1);
  }
}

console.log(hitungFaktorial(5));
console.log(hitungFaktorial(0));

function cariBilanganPrima(n) {
  // Tulis kode di sini
  if (n < 2) {
    return [];
  } else {
    let bilanganPrimas = [];
    for (let i = 2; i <= n; i++) {
      let isPrima = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrima = false;
          break;
        }
      }
      if (isPrima) {
        bilanganPrimas.push(i);
      }
    }
    return bilanganPrimas;
  }
}

console.log(cariBilanganPrima(20));

function hitungJumlahDigit(angka) {
  for (let i = 0; i < angka.length; i++) {
    let digit = angka[i];
    let hasil = 0;
    for (let j = 0; j < digit.length; j++) {
      hasil += parseInt(digit[j]);
    }
    return hasil;
  }
}

function cekPalindrom(kata) {
  let reversed = kata.split("").reverse().join("");
  return kata === reversed;
}

console.log(cekPalindrom("malam"));
console.log(cekPalindrom("ehllo"));

function hitungPangkat(angka, pangkat) {
  return angka ** pangkat;
}

console.log(hitungPangkat(2, 3));
console.log(hitungPangkat(5, 2));

function deretFibonacci(n) {
  // Tulis kode di sini
  let fibonacci = [0, 1];
  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci;
}

console.log(deretFibonacci(8));

function hitungJumlahKata(kalimat) {
  for (let i = 0; i < kalimat.length; i++) {
    let kata = kalimat[i];
    let count = 0;
    for (let j = 0; j < kata.length; j++) {
      if (kata[j] === " ") {
        count++;
      }
    }
    return count + 1;
  }
}

console.log(hitungJumlahKata("Saya suka belajar JavaScript"));

function cariBilanganTerbesar(arr) {
  // Tulis kode di sini
  let terbesar = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > terbesar) {
      terbesar = arr[i];
    }
  }
  return terbesar;
}

console.log(cariBilanganTerbesar([3, 7, 2, 9, 1]));

function hitungRataRata(arr) {
  // Tulis kode di sini
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

console.log(hitungRataRata([1, 2, 3, 4, 5]));

function hitungJumlahVokal(kata) {
  // Tulis kode di sini
  let count = 0;
  let vokal = ["a", "i", "u", "e", "o"];
  for (let i = 0; i < kata.length; i++) {
    if (vokal.includes(kata[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

console.log(hitungJumlahVokal("javascript"));

function cariFaktorBilangan(angka) {
  // Tulis kode di sini
  let faktor = [];
  for (let i = 1; i <= angka; i++) {
    if (angka % i === 0) {
      faktor.push(i);
    }
  }
  return faktor;
}

console.log(cariFaktorBilangan(12));

function konversiSuhu(suhu, jenis) {
  // Tulis kode di sini
  if (jenis === "C") {
    return (suhu * 9) / 5 + 32; // Celsius ke Fahrenheit
  } else if (jenis === "F") {
    return ((suhu - 32) * 5) / 9; // Fahrenheit ke Celsius
  } else {
    return "Jenis suhu tidak valid";
  }
}

console.log(konversiSuhu(30, "C")); // 86
console.log(konversiSuhu(86, "F")); // 30

function hitungKarakterUnik(str) {
  // Tulis kode di sini
  let karakterUnik = new Set();
  for (const element of str) {
    karakterUnik.add(element);
  }
  return karakterUnik.size;
}

console.log(hitungKarakterUnik("hello world")); // 8

function hitungKemunculanKata(kalimat, kata) {
  // Tulis kode di sini
  let count = 0;
  let kataArray = kalimat.split(" ");
  for (const element of kataArray) {
    if (element.toLowerCase() === kata.toLowerCase()) {
      count++;
    }
  }
  return count;
}

console.log(
  hitungKemunculanKata("Saya suka makan nasi, saya juga suka minum air", "suka")
); // 2

function cariBilanganGanjilTerbesar(arr) {
  // Tulis kode di sini
  let terbesar = null;
  for (const element of arr) {
    if (element % 2 !== 0) {
      if (terbesar === null || element > terbesar) {
        terbesar = element;
      }
    }
  }
  return terbesar;
}

console.log(cariBilanganGanjilTerbesar([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 9

function hitungJumlahDigitGenap(angka) {
  // Tulis kode di sini
  let count = 0;
  let digit = angka.toString().split("");
  for (const num of digit) {
    if (parseInt(num) % 2 === 0) {
      count++;
    }
  }

  return count;
}

console.log(hitungJumlahDigitGenap(1234567890)); // 5

function cekAnagram(kata1, kata2) {
  // Tulis kode di sini
  let sortedKata1 = kata1.split("").sort().join("");
  let sortedKata2 = kata2.split("").sort().join("");
  return sortedKata1 === sortedKata2;
}

console.log(cekAnagram("listen", "silent")); // true
console.log(cekAnagram("hello", "world")); // false

function hitungHurufKapital(kalimat) {
  // Tulis kode di sini
  let count = 0;
  for (const element of kalimat) {
    if (element === element.toUpperCase() && element !== " ") {
      count++;
    }
  }
  return count;
}

console.log(hitungHurufKapital("Saya Belajar JavaScript Di DICODING")); // 13

function cariBilanganHilang(arr) {
  let n = arr.length;
  let total = ((n + 1) * (n + 2)) / 2;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  return total - sum;
}

console.log(cariBilanganHilang([1, 2, 3, 5, 6, 7])); // 4

function hitungJumlahHari(tanggal1, tanggal2) {
  // Tulis kode di sini
  const date1 = new Date(tanggal1);
  const date2 = new Date(tanggal2);
  const timeDiff = Math.abs(date2 - date1);
  const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return dayDiff - 1; // Mengurangi 1 hari karena kita tidak menghitung hari pertama
}

console.log(hitungJumlahHari("2023-01-01", "2023-12-31")); // 364

function hitungKataUnik(kalimat) {
  // Tulis kode di sini
  let kataArray = kalimat.split(" ");
  let kataUnik = new Set();
  for (const element of kataArray) {
    kataUnik.add(element);
  }
  return kataUnik.size;
}

console.log(hitungKataUnik("Saya suka makan nasi suka minum air")); // 6

let a = 10;
let b = 20;
b = a;
b = 20;
console.log(a);
console.log(b);

let objA = { value: 10 };
let objB = objA;
objB.value = 20;
console.log(objA.value);
console.log("hello world");

function cariBilanganMunculSekali(arr) {
  // Tulis kode di sin
  let count = {};
  for (const element of arr) {
    if (count[element]) {
      count[element]++;
    } else {
      count[element] = 1;
    }
  }
  let hasil = [];
  for (const key in count) {
    if (count[key] === 1) {
      hasil.push(parseInt(key));
    }
  }
  return hasil;
}

console.log(cariBilanganMunculSekali([1, 2, 2, 3, 3, 4, 5, 5]));

function hitungKemunculanKarakter(str) {
  // Tulis kode di sini
  let count = {};
  for (const char of str) {
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }
  return count;
}

console.log(hitungKemunculanKarakter("hello world"));
console.log(hitungKemunculanKarakter("javascript"));

function hitungKombinasi(n, r) {
  // Tulis kode di sini
  function faktorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    }
    return num * faktorial(num - 1);
  }
  return faktorial(n) / (faktorial(r) * faktorial(n - r));
}

console.log(hitungKombinasi(5, 2)); // 10
console.log(hitungKombinasi(10, 3)); // 120

let student = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 90 },
  { name: "Charlie", score: 78 },
];

// do shallow copy
let shallowCopy = [...student];
shallowCopy[0].score = 95;
console.log(student[0].score);
console.log(shallowCopy[0].score);
console.log(student[0]);
console.log(shallowCopy[0]);
console.log(student);
console.log(shallowCopy);

// do deep copy
let deepCopy = JSON.parse(JSON.stringify(student));
deepCopy[0].score = 100;
console.log(student[0].score);
console.log(deepCopy[0].score);
console.log(student[0]);
console.log(deepCopy[0]);
console.log(student);
console.log(deepCopy);

// what is shallow copy?
// shallow copy is a copy of an object that only copies the reference of the object, not the value
// so if you change the value of the shallow copy, it will also change the value of the original object
// what is deep copy?
// deep copy is a copy of an object that copies the value of the object, not the reference
// so if you change the value of the deep copy, it will not change the value of the original object
// shallow copy is faster than deep copy because it only copies the reference of the object, not the value
// deep copy is slower than shallow copy because it copies the value of the object, not the reference
// shallow copy is used when you want to change the value of the object but not the original object
// deep copy is used when you want to change the value of the object and not the original object
