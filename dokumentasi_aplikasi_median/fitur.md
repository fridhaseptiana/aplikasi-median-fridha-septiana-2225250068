# Spesifikasi Fitur Aplikasi

## 1. Fitur inti (MVP)

| ID | Fitur | Deskripsi | Prioritas |
|---|---|---|---|
| F-01 | Beranda | Menampilkan pengantar dan akses ke menu utama | Must |
| F-02 | Materi median | Pengertian, konsep, dan langkah umum median | Must |
| F-03 | Pengurutan data | Menjelaskan pengurutan dari terkecil ke terbesar | Must |
| F-04 | Median data ganjil | Contoh posisi satu nilai tengah | Must |
| F-05 | Median data genap | Contoh dua nilai tengah dan rata-ratanya | Must |
| F-06 | Contoh soal | Pembahasan langkah demi langkah | Must |
| F-07 | Latihan interaktif | Pengguna mengisi atau memilih jawaban | Must |
| F-08 | Umpan balik | Menampilkan status jawaban dan penjelasan | Must |
| F-09 | Hasil latihan | Menampilkan skor sesi latihan | Should |
| F-10 | Navigasi | Memudahkan berpindah halaman | Must |

## 2. Rincian perilaku fitur

### Materi
- Materi dibagi menjadi subbagian pendek.
- Siswa dapat membuka kembali bagian yang belum dipahami.
- Setiap konsep utama diikuti contoh sederhana.

### Pengurutan data
- Tampilkan data awal dalam urutan acak.
- Tunjukkan hasil pengurutan.
- Jelaskan bahwa median ditentukan setelah data diurutkan.

### Contoh soal
- Sediakan contoh data ganjil dan genap.
- Setiap langkah menjelaskan apa yang dilakukan dan alasannya.
- Jawaban akhir ditampilkan setelah proses.

### Latihan
- Tampilkan satu soal pada satu waktu.
- Validasi input kosong dan input yang bukan angka jika menggunakan kolom angka.
- Setelah diperiksa, tampilkan benar/salah dan pembahasan.
- Berikan kesempatan mencoba soal berikutnya atau mengulang.

## 3. Fitur lanjutan (bukan MVP)

- Penyimpanan progres lintas perangkat.
- Login siswa.
- Dashboard guru.
- Pengelolaan soal dari panel admin.
- Analitik hasil belajar.
- PWA/offline mode.

Fitur lanjutan memerlukan pembahasan tambahan tentang keamanan, backend, dan penyimpanan data.
