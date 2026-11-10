# Rencana Cloud dan Deployment

## 1. Tujuan

Dokumen ini menjelaskan cara aplikasi web dipublikasikan agar dapat diakses melalui tautan browser, termasuk browser pada smartphone Android.

## 2. Arsitektur MVP

```text
[Smartphone Android / Laptop]
             |
          Browser
             |
          Internet
             |
     [Static Web Hosting]
             |
   HTML + CSS + JavaScript
             |
 [Materi, contoh, latihan, skor sesi]
```

Pada versi awal, logika pembelajaran berjalan di browser. Tidak diperlukan server aplikasi atau database daring untuk fitur inti.

## 3. Rekomendasi hosting

Pilih salah satu layanan static hosting yang mendukung publikasi file HTML, CSS, dan JavaScript, misalnya:
- GitHub Pages.
- Netlify.
- Vercel.

Pemilihan akhir bergantung pada ketentuan tugas, kemudahan akun, dan kebutuhan domain. Jangan menganggap aplikasi sudah online sebelum proses deployment berhasil dan URL diuji.

## 4. Langkah deployment tingkat tinggi

1. Pastikan aplikasi berjalan secara lokal.
2. Periksa semua tautan, gambar, dan file CSS/JavaScript.
3. Simpan source code dalam repositori Git.
4. Hubungkan repositori atau unggah folder proyek ke layanan hosting pilihan.
5. Atur folder publikasi sesuai struktur proyek.
6. Jalankan deployment.
7. Buka URL hasil deployment pada browser desktop.
8. Uji URL yang sama pada smartphone Android.
9. Periksa ulang tampilan, navigasi, dan fungsi latihan.

Langkah rinci dapat dibuat setelah layanan hosting dipilih.

## 5. Domain dan HTTPS

- URL bawaan penyedia hosting cukup untuk prototipe.
- Gunakan HTTPS jika disediakan oleh layanan hosting.
- Domain khusus bersifat opsional, bukan kebutuhan MVP.

## 6. Penyimpanan data dan privasi

Versi awal tidak mengumpulkan identitas siswa. Jawaban dan skor dapat dihitung sementara di browser. Jika kelak diperlukan penyimpanan progres lintas perangkat, perlu dirancang backend, autentikasi, kebijakan privasi, dan perlindungan data sebelum mengumpulkan data pengguna.

## 7. Batasan dan risiko

- Aplikasi statis memerlukan koneksi internet untuk membuka URL, kecuali kelak ditambahkan kemampuan offline/PWA.
- Perubahan source code perlu di-deploy ulang agar tampil pada URL publik.
- Jangan menaruh kata sandi, token, atau data rahasia di repositori publik.
- Hosting gratis dapat memiliki batasan layanan; periksa ketentuan penyedia sebelum publikasi.
