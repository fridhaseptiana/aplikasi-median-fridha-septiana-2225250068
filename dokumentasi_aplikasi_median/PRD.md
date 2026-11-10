# Product Requirements Document (PRD)
## Aplikasi Pembelajaran Statistika: Median (Nilai Tengah)

**Status:** Draft perencanaan  
**Platform:** Web responsif (mobile-first), terutama Android  
**Pengguna utama:** Siswa SMP yang mempelajari materi median

## 1. Ringkasan produk

Aplikasi ini merupakan media pembelajaran berbasis web untuk membantu siswa memahami median melalui materi ringkas, contoh penyelesaian bertahap, latihan interaktif, dan pembahasan/umpan balik. Aplikasi dirancang agar dapat dibuka melalui browser smartphone Android tanpa perlu memasang aplikasi dari toko aplikasi.

## 2. Latar belakang masalah

Berdasarkan wawancara tanggal 4 November 2026 dengan satu informan kelas VIII SMP, ditemukan bahwa:
- Informan terkadang lupa materi median yang pernah dipelajari.
- Informan mengalami kesulitan menentukan nilai tengah dari sekumpulan data.
- Informan kesulitan ketika data masih acak dan perlu diurutkan.
- Banyaknya data membuat proses pengurutan membutuhkan waktu lebih lama.
- Informan dapat memahami penjelasan dan contoh yang diberikan guru.
- Informan terbantu dengan membaca materi, melihat contoh, mengerjakan latihan, dan memeriksa jawaban.
- Informan mengharapkan contoh soal dan latihan soal untuk belajar mandiri.

Wawancara merupakan data awal dari satu informan sehingga kebutuhan produk perlu divalidasi lagi apabila tersedia wawancara atau masukan tambahan.

## 3. Tujuan produk

1. Menyediakan materi median yang dapat dipelajari dan diulang secara mandiri.
2. Membantu siswa memahami proses mengurutkan data sebelum menentukan median.
3. Menjelaskan perbedaan langkah median untuk banyak data ganjil dan genap.
4. Memberikan contoh dan latihan dengan tingkat kesulitan bertahap.
5. Memberikan umpan balik agar siswa dapat memeriksa dan memperbaiki jawabannya.

## 4. Pengguna dan kebutuhan

### Pengguna utama
Siswa SMP yang sedang mempelajari statistika, khususnya median.

### Kebutuhan pengguna
- Penjelasan dengan bahasa sederhana.
- Urutan belajar yang jelas.
- Contoh data yang diurutkan dari terkecil ke terbesar.
- Contoh median untuk jumlah data ganjil dan genap.
- Latihan dengan jumlah data bervariasi.
- Informasi benar/salah dan pembahasan jawaban.

### Pengguna pendukung
Guru atau mahasiswa pengembang yang meninjau isi materi dan soal. Versi awal tidak memerlukan akun guru.

## 5. Ruang lingkup

### Termasuk dalam versi awal (MVP)
- Halaman beranda dan navigasi.
- Ringkasan materi median.
- Penjelasan mengurutkan data.
- Penjelasan median pada banyak data ganjil dan genap.
- Contoh soal dengan langkah penyelesaian.
- Latihan interaktif pilihan jawaban atau input angka.
- Umpan balik dan pembahasan.
- Tampilan responsif untuk smartphone dan desktop.

### Belum termasuk dalam versi awal
- Login dan akun pengguna.
- Penyimpanan nilai lintas perangkat.
- Dashboard guru dan kelas.
- Peringkat/leaderboard.
- AI tutor atau chatbot.
- Backend dan database daring.
- Analitik penggunaan yang mengidentifikasi siswa.

Fitur di luar MVP dapat dipertimbangkan setelah aplikasi dasar diuji.

## 6. Kebutuhan fungsional

| ID | Kebutuhan | Prioritas |
|---|---|---|
| FR-01 | Pengguna dapat membuka halaman beranda dan memilih menu | Must |
| FR-02 | Pengguna dapat membaca pengertian dan konsep median | Must |
| FR-03 | Pengguna dapat mempelajari cara mengurutkan data | Must |
| FR-04 | Pengguna dapat melihat contoh median dengan jumlah data ganjil | Must |
| FR-05 | Pengguna dapat melihat contoh median dengan jumlah data genap | Must |
| FR-06 | Pengguna dapat mengerjakan latihan | Must |
| FR-07 | Aplikasi menampilkan umpan balik setelah jawaban diperiksa | Must |
| FR-08 | Aplikasi menampilkan pembahasan jawaban | Must |
| FR-09 | Pengguna dapat mengulang latihan | Should |
| FR-10 | Pengguna dapat berpindah materi/latihan dengan navigasi yang jelas | Must |

## 7. Kebutuhan nonfungsional

- **Responsif:** konten tidak terpotong pada lebar layar smartphone.
- **Mobile-first:** tombol dan area sentuh nyaman digunakan dengan jari.
- **Ringan:** halaman dan aset dioptimalkan agar waktu muat wajar pada jaringan seluler.
- **Mudah digunakan:** bahasa sederhana, hierarki judul jelas, dan instruksi singkat.
- **Aksesibel:** kontras teks memadai, ukuran teks terbaca, dan informasi tidak hanya dibedakan dengan warna.
- **Kompatibel:** diuji pada browser Android modern dan browser desktop.
- **Privasi:** versi awal tidak meminta nama lengkap, NIM, alamat, atau data pribadi siswa.

## 8. Alur pembelajaran inti

Beranda → Materi → Mengurutkan data → Median data ganjil/genap → Contoh soal → Latihan → Umpan balik → Pembahasan → Ulangi atau kembali ke materi.

## 9. Kriteria penerimaan

Produk MVP dapat dianggap siap untuk uji pengguna apabila:
1. Semua menu utama dapat dibuka dan tidak menghasilkan tautan rusak.
2. Materi dan contoh menjelaskan pengurutan sebelum penentuan median.
3. Contoh data ganjil dan genap menghasilkan jawaban yang benar.
4. Latihan dapat menerima jawaban, memeriksa jawaban, dan menampilkan umpan balik.
5. Pembahasan sesuai dengan data dan jawaban yang ditampilkan.
6. Tampilan dapat digunakan pada lebar layar sekitar 360 px tanpa scroll horizontal.
7. Tombol dan teks tetap terbaca pada smartphone Android.
8. Tidak ada data pribadi informan yang ditampilkan di aplikasi.

## 10. Asumsi dan hal yang perlu divalidasi

- Kurikulum/kelas sasaran dan kedalaman materi perlu dicocokkan dengan arahan dosen/guru.
- Bentuk latihan (pilihan ganda, input angka, atau gabungan) dapat diputuskan saat desain rinci.
- Satu wawancara belum cukup untuk menggeneralisasi kebutuhan seluruh siswa.
- Materi dan soal harus ditinjau oleh pengajar atau pihak yang memahami materi matematika.
