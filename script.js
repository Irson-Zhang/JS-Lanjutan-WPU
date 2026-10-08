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

var nama = "Sandhika";
console.log(nama);
