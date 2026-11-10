# Rancangan Database dan Penyimpanan Data

## 1. Keputusan untuk MVP

**Database belum diperlukan untuk versi awal.**

Alasannya:
- Materi dan contoh soal bersifat tetap.
- Jawaban dapat diperiksa oleh JavaScript di browser.
- Skor hanya perlu ditampilkan selama sesi latihan.
- Wawancara tidak menunjukkan kebutuhan akun atau penyimpanan hasil lintas perangkat.

## 2. Penyimpanan konten

Materi dan bank soal dapat disimpan dalam file JavaScript, misalnya `js/data-soal.js`, atau file JSON statis. Contoh struktur konseptual:

```js
const soal = {
  id: "M01",
  jenis: "ganjil",
  data: [7, 3, 9, 5, 1],
  jawaban: 5,
  pembahasan: [
    "Urutkan data dari terkecil ke terbesar.",
    "Data terurut: 1, 3, 5, 7, 9.",
    "Nilai yang berada di tengah adalah 5."
  ]
};
```

Contoh ini hanya ilustrasi format data. Pada aplikasi nyata, jawaban dan pembahasan harus diverifikasi.

## 3. Jika kelak membutuhkan database

Database baru dipertimbangkan apabila aplikasi membutuhkan:
- Akun siswa atau guru.
- Penyimpanan hasil belajar lintas perangkat.
- Riwayat latihan.
- Pengelolaan soal oleh guru.
- Rekap kelas.

Sebelum menambahkan database, tentukan data apa yang benar-benar diperlukan, siapa yang dapat mengaksesnya, berapa lama disimpan, dan bagaimana penghapusannya dilakukan.

## 4. Prinsip privasi

- Jangan meminta nama lengkap jika tidak diperlukan.
- Jangan menyimpan NIS/NISN atau informasi sensitif tanpa alasan dan persetujuan yang sesuai.
- Hindari mengirim jawaban latihan ke layanan eksternal.
- Jelaskan kepada pengguna jika suatu saat data disimpan secara daring.
