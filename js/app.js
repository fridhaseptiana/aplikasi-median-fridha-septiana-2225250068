
// ======================================================
// 🌸 BELAJAR MEDIAN - MEDIA PEMBELAJARAN STATISTIKA 🌸
// Pemilik: Fridha Septiana
// NIM: 2225250068
// ======================================================

// 💗 KUMPULAN SOAL LATIHAN
const soalLatihan = [
    {
        data: [9, 3, 7, 1, 5],
        jawaban: 5,
        penjelasan: "Urutan data: 1, 3, 5, 7, 9. Banyak data 5 (ganjil). Letak median = (5 + 1) / 2 = data ke-3. Jadi median = 5."
    },
    {
        data: [8, 2, 6, 4],
        jawaban: 5,
        penjelasan: "Urutan data: 2, 4, 6, 8. Banyak data 4 (genap). Dua nilai tengah adalah 4 dan 6. Median = (4 + 6) / 2 = 5."
    },
    {
        data: [12, 5, 9, 3, 7],
        jawaban: 7,
        penjelasan: "Urutan data: 3, 5, 7, 9, 12. Banyak data 5. Nilai tengah berada pada urutan ke-3, yaitu 7."
    },
    {
        data: [10, 4, 8, 2, 6, 12],
        jawaban: 7,
        penjelasan: "Urutan data: 2, 4, 6, 8, 10, 12. Dua nilai tengah adalah 6 dan 8. Median = (6 + 8) / 2 = 7."
    },
    {
        data: [15, 10, 20, 5, 25, 30, 35],
        jawaban: 20,
        penjelasan: "Urutan data: 5, 10, 15, 20, 25, 30, 35. Banyak data 7. Nilai tengah adalah data ke-4, yaitu 20."
    }
];

// 🌷 FUNGSI NAVIGASI HALAMAN
function tampilkanHalaman(halaman) {
    const konten = document.getElementById("konten");

    if (!konten) return;

    if (halaman === "beranda") {
        tampilkanBeranda(konten);
    } 
    else if (halaman === "materi") {
        tampilkanMateri(konten);
    } 
    else if (halaman === "latihan") {
        tampilkanLatihan(konten);
    }
}

// 🏡 HALAMAN BERANDA
function tampilkanBeranda(konten) {
    konten.innerHTML = `
        <section class="hero-belajar">
            <p>🌸 HALLO, PEJUANG MATEMATIKA! 🌸</p>
            <h2>Selamat Datang di Belajar Median!</h2>
            <p>
                Yuk, mengenal dunia statistika dengan cara yang lebih
                mudah, menyenangkan, dan tidak membosankan!
            </p>
            <h3>📊 Belajar Median, Temukan Nilai Tengah!</h3>
            <p>
                Di sini kamu akan belajar bagaimana mengurutkan data,
                menemukan nilai tengah, memahami rumus median, dan
                menyelesaikan berbagai persoalan statistika.
            </p>
            <button onclick="tampilkanHalaman('materi')">
                🌷 Mulai Belajar
            </button>
        </section>

        <section class="kartu-menu">
            <h2>🎀 Apa Saja yang Akan Kamu Pelajari?</h2>

            <div class="kartu">
                <h3>📚 Materi Pembelajaran</h3>
                <p>
                    Pelajari konsep median dari pengertian dasar,
                    rumus, hingga contoh penerapannya.
                </p>
                <button onclick="tampilkanHalaman('materi')">
                    Pelajari Materi
                </button>
            </div>

            <div class="kartu">
                <h3>✏️ Latihan Soal</h3>
                <p>
                    Uji pemahamanmu melalui lima soal latihan
                    lengkap dengan pembahasannya.
                </p>
                <button onclick="tampilkanHalaman('latihan')">
                    Mulai Latihan
                </button>
            </div>
        </section>

        <section class="tujuan">
            <h2>🎯 Tujuan Pembelajaran</h2>
            <p>Setelah mempelajari materi ini, kamu diharapkan mampu:</p>
            <ol>
                <li>Menjelaskan pengertian dan fungsi median dalam statistika.</li>
                <li>Mengidentifikasi median sebagai ukuran pemusatan data.</li>
                <li>Mengurutkan sekumpulan data dengan benar.</li>
                <li>Menentukan median pada data berjumlah ganjil.</li>
                <li>Menentukan median pada data berjumlah genap.</li>
                <li>Memahami konsep median pada data berkelompok.</li>
                <li>Menyelesaikan permasalahan median dalam kehidupan sehari-hari.</li>
            </ol>
        </section>

        <section class="pesan-motivasi">
            <h3>💗 Pesan untuk Kamu</h3>
            <p>
                Jangan takut dengan matematika! Setiap langkah kecil
                dalam belajar akan membawamu lebih dekat pada pemahaman.
                Yuk, belajar dengan semangat!
            </p>
            <p>✨ Kamu pasti bisa! ✨</p>
        </section>
    `;
}

// 📚 HALAMAN MATERI PEMBELAJARAN
function tampilkanMateri(konten) {
    konten.innerHTML = `
        <section class="judul-materi">
            <h2>📚 MATERI PEMBELAJARAN MEDIAN</h2>
            <p>
                Kenali, pahami, dan kuasai konsep median melalui
                penjelasan lengkap serta contoh soal berikut.
            </p>
        </section>

        <section class="materi">
            <h3>🌷 1. Mengenal Statistika</h3>
            <p>
                Statistika merupakan ilmu yang mempelajari cara
                mengumpulkan, mengolah, menyajikan, menganalisis,
                dan menginterpretasikan data untuk memperoleh
                informasi yang berguna dalam pengambilan keputusan.
            </p>
            <p>
                Data dapat berupa angka maupun kategori. Contohnya
                adalah nilai ujian mahasiswa, tinggi badan,
                jumlah pengunjung perpustakaan, dan hasil survei.
            </p>
            <div class="catatan">
                💡 <strong>Ingat!</strong> Statistika membantu kita
                memahami informasi yang terdapat di balik sekumpulan data.
            </div>
        </section>

        <section class="materi">
            <h3>🎀 2. Pengertian Median</h3>
            <p>
                Median adalah nilai tengah dari sekumpulan data
                yang telah diurutkan terlebih dahulu dari nilai
                terkecil hingga nilai terbesar atau sebaliknya.
            </p>
            <p>
                Median termasuk salah satu ukuran pemusatan data
                yang digunakan untuk menggambarkan posisi tengah
                suatu kumpulan pengamatan.
            </p>
            <p>
                Berbeda dengan rata-rata, median ditentukan
                berdasarkan posisi data setelah diurutkan.
                Oleh karena itu, median relatif tidak mudah
                dipengaruhi oleh nilai yang sangat besar atau
                sangat kecil (pencilan).
            </p>
            <div class="contoh">
                <strong>🌸 Contoh sederhana:</strong>
                <p>Data nilai: 60, 70, 80, 90, 100.</p>
                <p>Nilai yang berada tepat di tengah adalah 80.</p>
                <p><strong>Jadi, median = 80.</strong></p>
            </div>
        </section>

        <section class="materi">
            <h3>📌 3. Fungsi dan Manfaat Median</h3>
            <p>Median memiliki beberapa kegunaan, yaitu:</p>
            <ul>
                <li>Menunjukkan nilai tengah dari sekumpulan data.</li>
                <li>Membantu menggambarkan karakteristik suatu kelompok.</li>
                <li>Membantu membandingkan dua kelompok data.</li>
                <li>Mengurangi pengaruh nilai ekstrem terhadap ukuran pemusatan.</li>
                <li>Mempermudah penyajian dan interpretasi data.</li>
            </ul>
            <p>
                Median sangat bermanfaat ketika data memiliki
                beberapa nilai yang jauh lebih tinggi atau
                lebih rendah dibandingkan sebagian besar data lainnya.
            </p>
        </section>

        <section class="materi">
            <h3>📖 4. Jenis Data dalam Pembelajaran Median</h3>
            <p>
                Dalam pembelajaran statistika, median dapat
                ditentukan melalui beberapa bentuk penyajian data.
            </p>
            <h4>A. Data Tunggal</h4>
            <p>
                Data tunggal adalah data yang disajikan satu per satu
                tanpa dikelompokkan ke dalam interval kelas.
            </p>
            <p>Contoh: 5, 7, 8, 9, 10.</p>

            <h4>B. Data Berkelompok</h4>
            <p>
                Data berkelompok adalah data yang telah disusun
                ke dalam beberapa kelas interval dan dilengkapi
                dengan frekuensi.
            </p>
            <p>Contoh: nilai ujian dalam interval 50–59, 60–69, dan seterusnya.</p>

            <div class="catatan">
                💡 Pada data tunggal, kita mencari posisi nilai tengah.
                Pada data berkelompok, kita menggunakan tabel frekuensi
                dan rumus median data berkelompok.
            </div>
        </section>

        <section class="materi">
            <h3>🔢 5. Langkah Umum Menentukan Median</h3>
            <ol>
                <li>Tuliskan semua data yang diketahui.</li>
                <li>Urutkan data dari yang terkecil hingga terbesar.</li>
                <li>Hitung banyaknya seluruh data (n).</li>
                <li>Periksa apakah banyak data ganjil atau genap.</li>
                <li>Tentukan nilai tengah berdasarkan jenis datanya.</li>
                <li>Tuliskan hasil median beserta kesimpulannya.</li>
            </ol>
            <div class="catatan">
                ⭐ Jangan pernah melewatkan langkah mengurutkan data!
                Inilah salah satu hal terpenting dalam menentukan median.
            </div>
        </section>

        <section class="materi">
            <h3>🌼 6. Median pada Data Tunggal Ganjil</h3>
            <p>
                Jika jumlah seluruh data ganjil, median merupakan
                satu nilai yang tepat berada di posisi tengah
                setelah data diurutkan.
            </p>
            <h4>Rumus letak median:</h4>
            <div class="rumus">
                Me = data ke-((n + 1) / 2)
            </div>
            <p><strong>Keterangan:</strong></p>
            <ul>
                <li>Me = median.</li>
                <li>n = banyaknya data.</li>
                <li>Posisi median = urutan data yang berada di tengah.</li>
            </ul>

            <h4>📝 Contoh soal:</h4>
            <p>
                Tentukan median dari data berikut:
                7, 3, 9, 5, 1.
            </p>
            <p><strong>Langkah 1:</strong> Urutkan data.</p>
            <p>1, 3, 5, 7, 9.</p>
            <p><strong>Langkah 2:</strong> Hitung banyak data.</p>
            <p>n = 5, sehingga jumlah data termasuk ganjil.</p>
            <p><strong>Langkah 3:</strong> Tentukan letak median.</p>
            <div class="rumus">(5 + 1) / 2 = 3</div>
            <p><strong>Langkah 4:</strong> Ambil data ke-3.</p>
            <p>Data ke-3 adalah 5.</p>
            <div class="hasil">
                🌷 Jadi, median dari data tersebut adalah 5.
            </div>
        </section>

        <section class="materi">
            <h3>🦋 7. Median pada Data Tunggal Genap</h3>
            <p>
                Jika jumlah data genap, tidak terdapat satu nilai
                yang tepat berada di tengah. Oleh karena itu,
                median diperoleh dengan menghitung rata-rata
                dari dua nilai tengah.
            </p>
            <h4>Rumus median:</h4>
            <div class="rumus">
                Me = (x ke-(n/2) + x ke-(n/2 + 1)) / 2
            </div>
            <p><strong>Keterangan:</strong></p>
            <ul>
                <li>Me = median.</li>
                <li>n = banyak data.</li>
                <li>Kedua nilai yang digunakan adalah dua data di posisi tengah.</li>
            </ul>

            <h4>📝 Contoh soal:</h4>
            <p>
                Tentukan median dari data:
                8, 2, 6, 4.
            </p>
            <p><strong>Langkah 1:</strong> Urutkan data.</p>
            <p>2, 4, 6, 8.</p>
            <p><strong>Langkah 2:</strong> Hitung banyak data.</p>
            <p>n = 4, sehingga termasuk data genap.</p>
            <p><strong>Langkah 3:</strong> Tentukan dua posisi tengah.</p>
            <p>Posisi ke-2 dan ke-3, yaitu 4 dan 6.</p>
            <p><strong>Langkah 4:</strong> Hitung rata-rata keduanya.</p>
            <div class="rumus">(4 + 6) / 2 = 5</div>
            <div class="hasil">
                🌷 Jadi, median dari data tersebut adalah 5.
            </div>
        </section>

        <section class="materi">
            <h3>📊 8. Median pada Data Berkelompok</h3>
            <p>
                Pada data berkelompok, data disajikan dalam
                bentuk interval kelas beserta frekuensinya.
                Median ditentukan menggunakan frekuensi
                kumulatif untuk menemukan kelas median.
            </p>
            <h4>Rumus median data berkelompok:</h4>
            <div class="rumus">
                Me = Tb + ((n/2 - F) / f) × p
            </div>
            <p><strong>Keterangan simbol:</strong></p>
            <ul>
                <li>Me = median.</li>
                <li>Tb = tepi bawah kelas median.</li>
                <li>n = jumlah seluruh frekuensi.</li>
                <li>F = frekuensi kumulatif sebelum kelas median.</li>
                <li>f = frekuensi kelas median.</li>
                <li>p = panjang kelas interval.</li>
            </ul>

            <h4>📝 Contoh soal:</h4>
            <p>
                Diketahui distribusi nilai ujian mahasiswa berikut.
                Tentukan mediannya!
            </p>
            <table class="tabel-median">
                <tr><th>Interval Nilai</th><th>Frekuensi</th></tr>
                <tr><td>40–49</td><td>3</td></tr>
                <tr><td>50–59</td><td>5</td></tr>
                <tr><td>60–69</td><td>8</td></tr>
                <tr><td>70–79</td><td>10</td></tr>
                <tr><td>80–89</td><td>4</td></tr>
                <tr><td>Jumlah</td><td>30</td></tr>
            </table>

            <p><strong>Langkah 1: Hitung jumlah frekuensi.</strong></p>
            <p>n = 30, sehingga n/2 = 15.</p>

            <p><strong>Langkah 2: Tentukan frekuensi kumulatif.</strong></p>
            <table class="tabel-median">
                <tr><th>Interval</th><th>f</th><th>Frekuensi Kumulatif</th></tr>
                <tr><td>40–49</td><td>3</td><td>3</td></tr>
                <tr><td>50–59</td><td>5</td><td>8</td></tr>
                <tr><td>60–69</td><td>8</td><td>16</td></tr>
                <tr><td>70–79</td><td>10</td><td>26</td></tr>
                <tr><td>80–89</td><td>4</td><td>30</td></tr>
            </table>

            <p>
                Data ke-15 berada pada kelas 60–69,
                karena frekuensi kumulatifnya mencapai 16.
                Jadi kelas median adalah 60–69.
            </p>

            <p><strong>Langkah 3: Tentukan komponen rumus.</strong></p>
            <ul>
                <li>Tb = 59,5.</li>
                <li>n = 30.</li>
                <li>F = 8.</li>
                <li>f = 8.</li>
                <li>p = 10.</li>
            </ul>

            <p><strong>Langkah 4: Masukkan ke rumus.</strong></p>
            <div class="rumus">
                Me = 59,5 + ((15 - 8) / 8) × 10
                <br>
                Me = 59,5 + (7 / 8) × 10
                <br>
                Me = 59,5 + 8,75
                <br>
                Me = 68,25
            </div>
            <div class="hasil">
                🌷 Jadi, median data berkelompok tersebut adalah 68,25.
            </div>
        </section>

        <section class="materi">
            <h3>💐 9. Perbedaan Mean, Median, dan Modus</h3>
            <p>
                Mean, median, dan modus merupakan tiga ukuran
                pemusatan data. Ketiganya digunakan untuk
                menggambarkan karakteristik suatu kumpulan data,
                tetapi memiliki cara perhitungan yang berbeda.
            </p>
            <table class="tabel-median">
                <tr><th>Ukuran</th><th>Pengertian</th><th>Cara menentukan</th></tr>
                <tr>
                    <td>Mean</td>
                    <td>Rata-rata</td>
                    <td>Jumlah seluruh data dibagi banyak data.</td>
                </tr>
                <tr>
                    <td>Median</td>
                    <td>Nilai tengah</td>
                    <td>Mengurutkan data lalu menentukan posisi tengah.</td>
                </tr>
                <tr>
                    <td>Modus</td>
                    <td>Nilai yang paling sering muncul</td>
                    <td>Melihat frekuensi kemunculan terbanyak.</td>
                </tr>
            </table>

            <h4>Contoh:</h4>
            <p>Data: 2, 3, 3, 4, 8.</p>
            <ul>
                <li>Mean = 20 / 5 = 4.</li>
                <li>Median = 3.</li>
                <li>Modus = 3.</li>
            </ul>
            <div class="catatan">
                💡 Ketiganya sama-sama ukuran pemusatan data,
                tetapi tidak selalu menghasilkan nilai yang sama.
            </div>
        </section>

        <section class="materi">
            <h3>🏡 10. Penerapan Median dalam Kehidupan Sehari-hari</h3>
            <p>Median dapat digunakan dalam berbagai situasi, misalnya:</p>
            <ul>
                <li><strong>Pendidikan:</strong> mengetahui nilai tengah hasil ujian mahasiswa.</li>
                <li><strong>Ekonomi:</strong> menggambarkan pendapatan tengah suatu kelompok masyarakat.</li>
                <li><strong>Kesehatan:</strong> melihat nilai tengah waktu pemulihan pasien.</li>
                <li><strong>Lingkungan:</strong> menganalisis nilai tengah suhu harian.</li>
                <li><strong>Transportasi:</strong> melihat nilai tengah waktu perjalanan.</li>
            </ul>
            <div class="contoh">
                <strong>🌸 Contoh penerapan:</strong>
                <p>
                    Lima mahasiswa memperoleh nilai 60, 70, 75, 85,
                    dan 100. Median nilai tersebut adalah 75.
                    Artinya, nilai 75 berada pada posisi tengah
                    setelah seluruh nilai diurutkan.
                </p>
            </div>
        </section>

        <section class="materi">
            <h3>⚠️ 11. Kesalahan yang Sering Terjadi</h3>
            <ul>
                <li>Tidak mengurutkan data sebelum menentukan median.</li>
                <li>Salah menentukan banyaknya data.</li>
                <li>Mengambil satu nilai tengah pada jumlah data genap.</li>
                <li>Lupa membagi dua jumlah kedua nilai tengah.</li>
                <li>Salah menentukan kelas median pada data berkelompok.</li>
                <li>Keliru menentukan tepi bawah atau frekuensi kumulatif.</li>
            </ul>
            <div class="catatan">
                🎀 Tips: Periksa kembali urutan data dan posisi tengah
                sebelum menuliskan jawaban akhir.
            </div>
        </section>

        <section class="materi">
            <h3>🧠 12. Rangkuman Materi</h3>
            <ul>
                <li>Median adalah nilai tengah dari data yang telah diurutkan.</li>
                <li>Data ganjil memiliki satu nilai tengah.</li>
                <li>Data genap memiliki dua nilai tengah yang dirata-ratakan.</li>
                <li>Data berkelompok menggunakan frekuensi kumulatif dan rumus khusus.</li>
                <li>Median merupakan salah satu ukuran pemusatan data.</li>
                <li>Median berguna untuk menggambarkan posisi tengah suatu kumpulan data.</li>
            </ul>
            <div class="hasil">
                🌟 Hebat! Kamu sudah mempelajari konsep median.
                Sekarang waktunya mencoba latihan soal!
            </div>
            <button onclick="tampilkanHalaman('latihan')">
                ✏️ Yuk, Kerjakan Latihan!
            </button>
        </section>
    `;
}

// ✏️ HALAMAN LATIHAN SOAL
function tampilkanLatihan(konten) {
    let isiSoal = "";

    soalLatihan.forEach((soal, index) => {
        isiSoal += `
            <section class="soal">
                <h3>🌷 Soal ${index + 1}</h3>
                <p>Tentukan median dari kumpulan data berikut:</p>
                <div class="data-soal">
                    ${soal.data.join(" , ")}
                </div>
                <label for="jawaban${index}">Jawaban kamu:</label>
                <input
                    type="number"
                    id="jawaban${index}"
                    placeholder="Masukkan nilai median"
                    step="any"
                >
                <p id="hasil${index}" class="hasil-jawaban"></p>
            </section>
        `;
    });

    konten.innerHTML = `
        <section class="judul-materi">
            <h2>🎀 KUIS CERDAS MEDIAN</h2>
            <p>
                Saatnya menguji kemampuanmu!
                Kerjakan lima soal berikut dengan teliti.
            </p>
            <p>⭐ Setiap jawaban benar bernilai 20 poin.</p>
        </section>

        ${isiSoal}

        <button onclick="periksaSemuaJawaban()">
            💗 Periksa Jawaban Saya
        </button>

        <button onclick="tampilkanHalaman('latihan')">
    🔄 Ulangi Latihan
</button>

        <div id="nilaiAkhir"></div>
    `;
}

// 🔍 MEMERIKSA JAWABAN
function periksaSemuaJawaban() {
    let jumlahBenar = 0;
    let semuaTerisi = true;

    for (let i = 0; i < soalLatihan.length; i++) {
        const input = document.getElementById(`jawaban${i}`);

        if (!input || input.value.trim() === "") {
            semuaTerisi = false;
        }
    }

    const nilaiAkhir = document.getElementById("nilaiAkhir");

    if (!semuaTerisi) {
        nilaiAkhir.innerHTML = `
            <div class="catatan">
                🌸 Ups! Masih ada jawaban yang kosong.
                Yuk, lengkapi semua soal terlebih dahulu!
            </div>
        `;
        return;
    }

    soalLatihan.forEach((soal, index) => {
        const jawaban = Number(
            document.getElementById(`jawaban${index}`).value
        );

        const hasil = document.getElementById(`hasil${index}`);

        if (jawaban === soal.jawaban) {
            jumlahBenar++;

            hasil.innerHTML = `
                💚 <strong>BENAR!</strong><br>
                ${soal.penjelasan}
            `;
            hasil.style.color = "green";
        } else {
            hasil.innerHTML = `
                💗 <strong>Belum tepat, jangan menyerah!</strong><br>
                Jawaban yang benar: ${soal.jawaban}.<br>
                ${soal.penjelasan}
            `;
            hasil.style.color = "#d45b85";
        }
    });

    const skor = (jumlahBenar / soalLatihan.length) * 100;

    let pesan = "";

    if (skor === 100) {
        pesan = "LUAR BIASA! 🌟 Semua jawabanmu benar. Kamu hebat!";
    } else if (skor >= 80) {
        pesan = "HEBAT SEKALI! 💐 Pemahamanmu sudah sangat baik.";
    } else if (skor >= 60) {
        pesan = "BAGUS! 🌷 Terus berlatih agar semakin memahami median.";
    } else {
        pesan = "JANGAN MENYERAH! 🧸 Pelajari kembali materinya dan coba lagi.";
    }

    nilaiAkhir.innerHTML = `
        <section class="hasil">
            <h2>🏆 HASIL LATIHANMU</h2>
            <h3>${skor} / 100</h3>
            <p>Jawaban benar: ${jumlahBenar} dari 5 soal.</p>
            <p>${pesan}</p>
            <p>Terima kasih sudah semangat belajar! 💗</p>
        </section>
    `;
}

// 🏡 TAMPILKAN BERANDA SAAT APLIKASI DIBUKA
document.addEventListener("DOMContentLoaded", function () {
    tampilkanHalaman("beranda");
});

