/*
Soal: Program Pencarian Angka Terbesar

Buatlah sebuah program yang meminta pengguna untuk memasukkan beberapa angka, kemudian program akan menemukan dan menampilkan angka terbesar dari angka-angka yang dimasukkan.

Langkah-langkah:

1.  Program akan meminta pengguna untuk memasukkan jumlah angka yang ingin dimasukkan.
2.  Pengguna akan diminta untuk memasukkan angka-angka tersebut satu per satu.
3.  Setelah semua angka dimasukkan, program akan menampilkan angka terbesar dari angka-angka yang dimasukkan.

Contoh Inputan:
Jumlah angka yang akan anda masukkan: 5
Masukkan angka ke-1: 10
Masukkan angka ke-2: 5
Masukkan angka ke-3: 20
Masukkan angka ke-4: 15
Masukkan angka ke-5: 8
Angka terbesar adalah: 20

*/
function cariTerbesar(){
let jmlhAngka = parseInt(prompt('Masukkan jumlah angka yang akan di masukkan: '));
console.log('Jumlah angka yang akan anda masukkan: ' +jmlhAngka);

let angkaTerbesar = -Infinity;

for(let i = 1; i <= jmlhAngka; i++){
    let angkaInputan = parseInt(prompt('Masukkan angka ke-' + i))
    console.log('angka ke-' + i ,' : ' + angkaInputan);

    if(angkaInputan > angkaTerbesar){
        angkaTerbesar = angkaInputan;
    }
}
    console.log('Angka terbesar adalah: ' +angkaTerbesar);
}

cariTerbesar();




