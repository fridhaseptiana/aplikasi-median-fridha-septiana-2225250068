# Desain UI/UX Aplikasi Pembelajaran Median

## 1. Arah desain

Aplikasi dirancang dengan pendekatan **mobile-first** karena sasaran akses utamanya adalah smartphone Android melalui browser. Antarmuka harus sederhana, mudah dibaca, dan membantu siswa fokus pada urutan langkah penyelesaian median.

## 2. Prinsip desain

1. **Sederhana:** satu layar berfokus pada satu tujuan belajar.
2. **Bertahap:** konsep → pengurutan → penentuan median → latihan.
3. **Konsisten:** posisi tombol kembali, lanjut, dan navigasi tidak berubah-ubah.
4. **Terbaca:** teks isi nyaman dibaca tanpa memperbesar layar.
5. **Ramah sentuhan:** tombol cukup besar dan memiliki jarak.
6. **Inklusif:** jangan menggunakan warna sebagai satu-satunya penanda benar/salah.

## 3. Struktur navigasi

Navigasi utama:
- Beranda
- Materi
- Contoh
- Latihan
- Tentang

Pada layar kecil, navigasi dapat menggunakan menu ringkas atau bilah navigasi bawah. Pilih satu pola dan gunakan secara konsisten.

## 4. Rancangan layar

### A. Beranda
Elemen:
- Nama/logo aplikasi.
- Judul: “Belajar Median”.
- Deskripsi singkat: “Pahami cara mengurutkan data dan menentukan nilai tengah.”
- Tombol utama “Mulai Belajar”.
- Kartu pintasan Materi, Contoh Soal, dan Latihan.

Sketsa teks:

```text
+--------------------------------+
| BELAJAR MEDIAN                 |
| Yuk pahami nilai tengah data   |
|                                |
| [       Mulai Belajar       ]  |
|                                |
| [ Materi ]   [ Contoh Soal ]   |
| [       Latihan Soal       ]   |
+--------------------------------+
```

### B. Halaman Materi
Elemen:
- Tujuan pembelajaran singkat.
- Pengertian median.
- Langkah menentukan median.
- Bagian khusus data ganjil dan genap.
- Ilustrasi angka yang sudah diurutkan.
- Tombol “Lihat Contoh”.

### C. Halaman Contoh Soal
Elemen:
- Soal dan kumpulan data.
- Langkah 1: urutkan data.
- Langkah 2: tentukan banyak data.
- Langkah 3: tentukan nilai tengah.
- Untuk data genap, tampilkan dua nilai tengah dan cara memperoleh rata-ratanya.
- Kesimpulan jawaban.

Langkah dapat ditampilkan satu per satu melalui tombol “Lanjut” agar siswa tidak menerima terlalu banyak informasi sekaligus.

### D. Halaman Latihan
Elemen:
- Nomor soal dan indikator progres.
- Instruksi singkat.
- Data yang perlu diolah.
- Kolom jawaban atau pilihan jawaban.
- Tombol “Periksa Jawaban”.
- Umpan balik dan tombol “Lihat Pembahasan”.

### E. Halaman Hasil
Elemen:
- Jumlah jawaban benar.
- Jumlah soal yang dikerjakan.
- Pesan penguatan.
- Tombol “Ulangi Latihan” dan “Kembali ke Materi”.

## 5. Komponen visual

- Kartu materi dan kartu soal.
- Label langkah (1, 2, 3).
- Penanda posisi nilai tengah.
- Progress indikator latihan.
- Panel umpan balik dengan teks dan ikon.
- Tombol primer untuk tindakan utama dan tombol sekunder untuk navigasi.

## 6. Responsivitas

- Gunakan satu kolom pada smartphone.
- Hindari tabel lebar; gunakan kartu atau daftar angka.
- Jangan menetapkan lebar konten yang melebihi layar.
- Pastikan tombol dapat disentuh dengan nyaman.
- Uji pada lebar 360 px, 390 px, dan 412 px.
- Pada tablet/desktop, konten dapat dibatasi lebar maksimumnya agar tetap nyaman dibaca.

## 7. Aksesibilitas dan keterbacaan

- Gunakan kontras teks dan latar yang memadai.
- Sediakan label yang jelas pada input.
- Gunakan ukuran teks isi yang nyaman.
- Beri status benar/salah dalam bentuk teks, bukan warna saja.
- Pastikan fokus keyboard terlihat dan elemen interaktif dapat diakses.
- Hindari animasi berlebihan; animasi hanya digunakan jika membantu memahami proses.

## 8. Konten yang belum ditetapkan

Warna final, jenis huruf, ilustrasi, logo, dan gaya visual akhir dapat dipilih saat pembuatan prototipe. Jangan menunda validasi keterbacaan hanya demi dekorasi.
