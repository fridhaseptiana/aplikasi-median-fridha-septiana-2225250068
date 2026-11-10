# Alur Penggunaan Aplikasi

## 1. Alur utama

```text
[Beranda]
    |
    v
[Pilih Materi]
    |
    v
[Pengertian Median]
    |
    v
[Langkah Mengurutkan Data]
    |
    v
[Median Data Ganjil dan Genap]
    |
    v
[Contoh Soal Bertahap]
    |
    v
[Latihan]
    |
    v
[Periksa Jawaban]
    |
    +---- Jawaban benar ----> [Umpan balik positif]
    |
    +---- Jawaban salah ----> [Petunjuk dan pembahasan]
                                  |
                                  v
                              [Coba lagi]
    |
    v
[Hasil Latihan]
    |
    +----> [Ulangi Latihan]
    |
    +----> [Kembali ke Materi]
```

## 2. Alur ketika membuka materi

1. Pengguna membuka aplikasi.
2. Pengguna memilih menu Materi.
3. Aplikasi menampilkan pengertian median.
4. Pengguna membaca langkah pengurutan data.
5. Pengguna mempelajari median untuk data berjumlah ganjil dan genap.
6. Pengguna dapat berpindah ke Contoh Soal.

## 3. Alur ketika mengerjakan latihan

1. Pengguna memilih menu Latihan.
2. Aplikasi menampilkan soal dan instruksi.
3. Pengguna memasukkan atau memilih jawaban.
4. Pengguna menekan tombol Periksa Jawaban.
5. Aplikasi memvalidasi jawaban.
6. Aplikasi menampilkan status dan pembahasan.
7. Pengguna melanjutkan atau mengulangi latihan.

## 4. Kondisi khusus

- Jika jawaban kosong, tampilkan instruksi untuk mengisi jawaban.
- Jika input bukan angka pada soal numerik, tampilkan pesan kesalahan yang mudah dipahami.
- Jika jawaban salah, jangan hanya menampilkan “Salah”; berikan petunjuk langkah yang perlu diperiksa.
- Jika pengguna memuat ulang halaman, versi MVP tidak menjamin progres tersimpan. Jelaskan batasan ini jika fitur progres belum dibuat.
