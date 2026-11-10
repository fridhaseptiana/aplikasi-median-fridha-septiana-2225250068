# Rencana Pengujian Aplikasi

## 1. Tujuan pengujian

Memastikan materi, perhitungan median, interaksi latihan, navigasi, dan tampilan responsif berjalan sesuai kebutuhan.

## 2. Pengujian logika median

| ID | Data masukan | Kondisi | Hasil yang diharapkan |
|---|---|---|---|
| T-01 | 7, 3, 9, 5, 1 | 5 data (ganjil) | Data terurut 1, 3, 5, 7, 9; median 5 |
| T-02 | 8, 2, 6, 4 | 4 data (genap) | Data terurut 2, 4, 6, 8; median 5 |
| T-03 | 4, 1, 3 | Data acak, ganjil | Data terurut 1, 3, 4; median 3 |
| T-04 | 10, 2, 8, 4, 6, 12 | Data acak, genap | Data terurut 2, 4, 6, 8, 10, 12; median 7 |
| T-05 | 5 | Satu data | Median 5 |
| T-06 | input kosong | Tidak ada data | Aplikasi menampilkan validasi, bukan hasil median |
| T-07 | 2, "a", 4 | Input tidak seluruhnya numerik | Aplikasi menolak atau memberi pesan validasi |

## 3. Pengujian fitur

| ID | Langkah | Hasil yang diharapkan |
|---|---|---|
| F-TEST-01 | Buka beranda | Beranda tampil tanpa error |
| F-TEST-02 | Pilih menu Materi | Konten materi terbuka |
| F-TEST-03 | Pilih Contoh Soal | Langkah penyelesaian tampil berurutan |
| F-TEST-04 | Kirim jawaban benar | Umpan balik benar tampil |
| F-TEST-05 | Kirim jawaban salah | Umpan balik dan pembahasan tampil |
| F-TEST-06 | Kirim jawaban kosong | Pesan validasi tampil |
| F-TEST-07 | Tekan ulangi latihan | Latihan dapat dimulai kembali |

## 4. Pengujian responsif

Lakukan pengujian setidaknya pada:
- Smartphone Android dengan lebar viewport sekitar 360 px.
- Smartphone dengan lebar viewport sekitar 390–412 px.
- Tablet atau ukuran menengah.
- Desktop/laptop.

Periksa:
- Tidak ada scroll horizontal yang tidak diperlukan.
- Teks tidak terpotong.
- Tombol mudah disentuh.
- Input tidak tertutup keyboard.
- Navigasi tetap dapat digunakan.
- Angka dan ilustrasi tidak keluar dari layar.

## 5. Format pencatatan hasil

| ID tes | Hasil aktual | Status (Lulus/Gagal) | Catatan/perbaikan |
|---|---|---|---|
| T-01 | Diisi saat pengujian | Belum diuji | - |
| F-TEST-01 | Diisi saat pengujian | Belum diuji | - |

Jangan mengisi status Lulus sebelum pengujian benar-benar dilakukan.
