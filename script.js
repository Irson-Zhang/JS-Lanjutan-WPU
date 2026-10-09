// Cara untuk membuat Object pada javascript
// 1. Object Literal
// PROBLEM : tidak efektif untuk object yang banyak
// let mahasiswa1 = {
//   nama: "Sandhika",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   },
// };

// let mahasiswa2 = {
//   nama: "Doddy",
//   energi: 20,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   },
// };

// 2. Function Declaration

// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   },

//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain!`);
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, selamat tidur!`);
//   },
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }

// let sandhika = Mahasiswa("Sandhika", 10);
// let doddy = Mahasiswa("Doddy", 20);

// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama}, selamat makan!`;
// };

// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Halo ${this.nama}, selamat bermain!`;
// };

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `Halo ${this.nama}, selamat tidur!`;
// };

// let sandhika = new Mahasiswa("Sandhika", 10);

// versi Class
// class Mahasiswa {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }

//   makan(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
//   }

//   main(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain!`;
//   }

//   tidur(jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat tidur!`;
//   }
// }

// let sandhika = new Mahasiswa("Sandhika", 10);
// let doddy = new Mahasiswa("Doddy", 20);

// let angka = 1;
// console.log(angka);

// 3. Constructor Function
// keyword new
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   };

//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain!`);
//   };
// }

// let sandhika = new Mahasiswa('Sandhika', 10);

// 4. Object.create

// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// var nama = "Sandhika";
// console.log(nama);

// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution phase

// console.log(sayHello());

// var nama = "Sandhika";
// var umur = 33;

// function sayHello() {
//   return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

// var nama = 'Sandhika Galih';
// var username = '@sandhikagalih';

// function cetakURL() {
//   var instagramURL = 'http://instagram.com/';
//   return instagramURL + username;
// }

// console.log(cetakURL('doddyferdiansyah', '@erik'));

// function satu() {
//   var nama = "Sandhika";
//   console.log(nama);
// }

// function dua() {
//   console.log(nama);
// }

// console.log(nama);
// var nama = "Erik";
// satu();
// dua("Doddy");
// console.log(nama);

// function init() {
//   // let nama = 'Sandhika';
//   return function (nama) {
//     console.log(nama);
//   };
//   return tampilNama;
// }
// let panggilNama = init();
// panggilNama("Sandhika");
// panggilNama("Galih");

function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
  };
}

let selamatPagi = ucapkanSalam("Pagi");
let selamatSiang = ucapkanSalam("Siang");
let selamatMalam = ucapkanSalam("Malam");

console.dir(selamatMalam("Sandhika"));

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());

const i = [1, 2, 3];

i.push(4);

console.log(i);
