# Rekomendasi Teknologi

## 1. Pendekatan versi awal

Untuk MVP, gunakan aplikasi web statis yang ringan. Pendekatan ini cukup untuk menampilkan materi, contoh, latihan, pemeriksaan jawaban, dan hasil latihan tanpa server khusus.

## 2. Teknologi yang direkomendasikan

| Teknologi | Peran | Alasan |
|---|---|---|
| HTML5 | Struktur halaman | Dasar halaman web |
| CSS3 | Tampilan dan responsivitas | Mengatur layout mobile-first |
| JavaScript | Interaksi dan logika latihan | Memeriksa jawaban dan menampilkan umpan balik |
| Git dan GitHub | Pengelolaan versi kode | Menyimpan dan melacak perubahan |
| Static hosting | Publikasi aplikasi | Dapat menyajikan file web tanpa backend |

Framework seperti React atau Vue tidak wajib untuk versi pertama. Mulai dari HTML, CSS, dan JavaScript biasa agar struktur dan logika mudah dipahami. Framework dapat dipertimbangkan jika kompleksitas aplikasi meningkat.

## 3. Struktur folder awal yang disarankan

```text
aplikasi-median/
├── index.html
├── README.md
├── assets/
│   ├── images/
│   └── icons/
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── materi.js
│   ├── latihan.js
│   └── data-soal.js
└── docs/
    ├── PRD.md
    ├── analisis.md
    ├── desain.md
    ├── fitur.md
    ├── alur-aplikasi.md
    ├── materi.md
    ├── teknologi.md
    ├── cloud.md
    ├── database.md
    ├── testing.md
    └── roadmap.md
```

Struktur dapat disederhanakan atau disesuaikan ketika implementasi dimulai.

## 4. Standar implementasi

- Pisahkan struktur, gaya, dan logika sebisa mungkin.
- Gunakan nama file dan variabel yang mudah dipahami.
- Pastikan fungsi pemeriksaan jawaban dapat diuji.
- Hindari memasukkan data pribadi siswa ke source code.
- Uji aplikasi di browser desktop dan Android.
