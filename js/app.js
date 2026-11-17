
/* =====================================================
   BELAJAR MEDIAN
   Media Pembelajaran Statistika Interaktif
   Pemilik: Fridha Septiana
   NIM: 2225250068
   Kelas: 3E
   ===================================================== */

// =====================================================
// 1. DATA LIMA SOAL MATHEMATICAL LITERACY
// =====================================================

const soalInstrumen = [
    {
        indikator: "Mathematical Reasoning",
        judul: "Memilih Rute Sepeda",
        soal: "Rudi mencatat waktu tempuh (menit) dua rute sepeda menuju sekolah selama 7 hari. Rute A: 25, 18, 20, 45, 19, 22, 21. Rute B: 24, 23, 22, 25, 23, 24, 22. Rudi ingin memilih rute dengan waktu tempuh yang paling umum terjadi, tanpa terpengaruh hari yang sangat macet. Temannya menyarankan memilih Rute B karena rata-rata waktu tempuhnya lebih kecil. Rute mana yang sebaiknya dipilih Rudi jika dibandingkan menggunakan median? Jelaskan alasan matematis Anda.",
        tahapan: [
            { rmt: "Input", prompt: "Identifikasi informasi dan tujuan masalah: ukuran apa yang perlu dibandingkan dan mengapa data perlu diurutkan?", bobot: 1, kunci: "Memilih median karena ingin waktu yang umum dan data diurutkan." },
            { rmt: "Elaboration", prompt: "Tuliskan urutan data Rute A dan Rute B, lalu hitung median masing-masing.", bobot: 2, kunci: "A: 18, 19, 20, 21, 22, 25, 45; median 21. B: 22, 22, 23, 23, 24, 24, 25; median 23." },
            { rmt: "Elaboration", prompt: "Bandingkan kedua median menggunakan hubungan matematika.", bobot: 1, kunci: "21 < 23." },
            { rmt: "Output", prompt: "Tentukan rute yang sebaiknya dipilih Rudi.", bobot: 1, kunci: "Rute A." },
            { rmt: "Output", prompt: "Jelaskan alasan matematis, termasuk pengaruh nilai ekstrem terhadap rata-rata.", bobot: 1, kunci: "Median A lebih kecil; nilai ekstrem 45 menaikkan rata-rata Rute A." }
        ],
        pembahasan: "Median Rute A = 21 menit dan median Rute B = 23 menit. Jadi, Rudi sebaiknya memilih Rute A. Nilai 45 menit merupakan nilai ekstrem yang menaikkan rata-rata Rute A, sedangkan median lebih mewakili waktu tempuh yang umum."
    },
    {
        indikator: "Formulating Situations Mathematically",
        judul: "Target Median Nilai Tugas",
        soal: "Lima nilai tugas Dimas adalah 60, 70, 80, 90, dan 100. Ia akan mengerjakan satu tugas lagi dan ingin median dari keenam nilainya menjadi 76. Diketahui nilai tugas keenam berada di antara 70 dan 80. Ubahlah situasi tersebut menjadi model matematika untuk menentukan nilai tugas keenam, kemudian selesaikan.",
        tahapan: [
            { rmt: "Input", prompt: "Tuliskan informasi yang diketahui dan apa yang ditanyakan.", bobot: 1, kunci: "Nilai 60, 70, 80, 90, 100; nilai keenam x, 70 < x < 80; median 76." },
            { rmt: "Input", prompt: "Tentukan banyak data dan jelaskan jenis data berdasarkan banyaknya.", bobot: 1, kunci: "n = 6, data genap." },
            { rmt: "Elaboration", prompt: "Tentukan urutan keenam data dan dua posisi tengahnya.", bobot: 1, kunci: "60, 70, x, 80, 90, 100; data tengah x dan 80." },
            { rmt: "Elaboration", prompt: "Bentuk model matematika berdasarkan rumus median data genap.", bobot: 1, kunci: "(x + 80) / 2 = 76." },
            { rmt: "Elaboration", prompt: "Selesaikan persamaan sampai memperoleh bentuk x + 80 = 152.", bobot: 1, kunci: "Kedua ruas dikalikan 2: x + 80 = 152." },
            { rmt: "Output", prompt: "Tentukan x dan periksa apakah memenuhi syarat soal.", bobot: 1, kunci: "x = 72 dan memenuhi 70 < 72 < 80." }
        ],
        pembahasan: "Karena 70 < x < 80, urutan data adalah 60, 70, x, 80, 90, 100. Modelnya (x + 80) / 2 = 76, sehingga x + 80 = 152 dan x = 72. Nilai tugas keenam Dimas adalah 72."
    },
    {
        indikator: "Employing Mathematical Concepts, Facts, and Procedures",
        judul: "Pengunjung Perpustakaan",
        soal: "Banyak pengunjung perpustakaan sekolah selama 8 hari berturut-turut adalah 34, 28, 41, 25, 37, 30, 45, dan 32. Tentukan median banyak pengunjung tersebut dan tunjukkan langkah perhitungan Anda.",
        tahapan: [
            { rmt: "Input", prompt: "Jelaskan mengapa data harus diurutkan dan bagaimana banyak data memengaruhi cara menentukan median.", bobot: 1, kunci: "Data belum urut; n = 8 genap; median adalah rata-rata dua data tengah." },
            { rmt: "Elaboration", prompt: "Urutkan seluruh data dari yang terkecil hingga terbesar.", bobot: 2, kunci: "25, 28, 30, 32, 34, 37, 41, 45." },
            { rmt: "Elaboration", prompt: "Tentukan dua data tengah dan hitung mediannya.", bobot: 2, kunci: "Data ke-4 = 32 dan ke-5 = 34; (32 + 34) / 2 = 33." },
            { rmt: "Output", prompt: "Tuliskan kesimpulan median beserta konteks dan satuannya.", bobot: 1, kunci: "Median banyak pengunjung adalah 33 pengunjung." }
        ],
        pembahasan: "Data terurut: 25, 28, 30, 32, 34, 37, 41, 45. Karena n = 8, median adalah rata-rata data ke-4 dan ke-5, yaitu 33 pengunjung."
    },
    {
        indikator: "Interpreting, Applying, and Evaluating Mathematical Outcomes",
        judul: "Waktu Belajar Mandiri",
        soal: "Waktu belajar mandiri lima siswa dalam satu minggu adalah 2, 3, 3, 4, dan 18 jam. Seorang siswa menghitung rata-rata lalu menyimpulkan, 'Rata-rata waktu belajar teman-teman adalah 6 jam per minggu, jadi sebagian besar teman belajar sekitar 6 jam.' Apakah Anda setuju dengan kesimpulan tersebut? Tentukan median data, tafsirkan hasilnya, dan jelaskan ukuran mana yang lebih tepat menggambarkan sebagian besar siswa.",
        tahapan: [
            { rmt: "Input", prompt: "Periksa dan tuliskan perhitungan rata-rata yang dibuat siswa.", bobot: 1, kunci: "(2 + 3 + 3 + 4 + 18) / 5 = 6 jam." },
            { rmt: "Elaboration", prompt: "Urutkan data dan tentukan median.", bobot: 1, kunci: "Data 2, 3, 3, 4, 18; median = 3 jam." },
            { rmt: "Elaboration", prompt: "Bandingkan hasil median dengan sebaran data dan mayoritas siswa.", bobot: 1, kunci: "Empat dari lima siswa belajar 2–4 jam; hanya satu siswa 18 jam." },
            { rmt: "Elaboration", prompt: "Jelaskan pengaruh nilai ekstrem terhadap rata-rata dan median.", bobot: 1, kunci: "Nilai 18 jam menaikkan rata-rata; median tidak terpengaruh sebesar rata-rata." },
            { rmt: "Output", prompt: "Nyatakan apakah Anda setuju dengan kesimpulan siswa dan berikan alasan.", bobot: 1, kunci: "Tidak setuju; rata-rata 6 jam tidak mewakili sebagian besar siswa." },
            { rmt: "Output", prompt: "Pilih ukuran yang lebih tepat dan tuliskan kesimpulan dalam konteks.", bobot: 1, kunci: "Median 3 jam lebih tepat." }
        ],
        pembahasan: "Rata-rata 6 jam benar secara perhitungan, tetapi tidak menggambarkan sebagian besar siswa. Median adalah 3 jam. Empat dari lima siswa belajar 2–4 jam, sedangkan satu siswa belajar 18 jam. Nilai ekstrem tersebut menaikkan rata-rata, sehingga median lebih tepat digunakan."
    },
    {
        indikator: "Mathematical Representation and Communication",
        judul: "Tinggi Tanaman",
        soal: "Tinggi sembilan tanaman cabai (cm) yang diukur siswa adalah 12, 15, 9, 20, 14, 11, 18, 13, dan 16. Sajikan data tersebut dalam tabel yang sudah diurutkan, tentukan median tinggi tanaman, kemudian tuliskan kesimpulan dalam kalimat lengkap yang dapat dipahami orang lain.",
        tahapan: [
            { rmt: "Input", prompt: "Urutkan data dan sajikan dalam tabel dengan kolom Urutan ke- dan Tinggi (cm).", bobot: 1, kunci: "1=9, 2=11, 3=12, 4=13, 5=14, 6=15, 7=16, 8=18, 9=20." },
            { rmt: "Elaboration", prompt: "Tentukan banyak data dan posisi median menggunakan rumus data ganjil.", bobot: 1, kunci: "n = 9; posisi median = (9 + 1) / 2 = data ke-5." },
            { rmt: "Elaboration", prompt: "Ambil nilai pada posisi median dan tentukan hasilnya.", bobot: 2, kunci: "Data ke-5 = 14; median = 14." },
            { rmt: "Output", prompt: "Tuliskan hasil median dengan satuan yang tepat.", bobot: 1, kunci: "Median tinggi tanaman = 14 cm." },
            { rmt: "Output", prompt: "Buat kesimpulan lengkap yang menjelaskan arti median pada konteks tanaman.", bobot: 1, kunci: "Median tinggi tanaman cabai 14 cm; empat tanaman lebih pendek dan empat lebih tinggi." }
        ],
        pembahasan: "Data terurut: 9, 11, 12, 13, 14, 15, 16, 18, 20. Banyak data 9, sehingga posisi median adalah data ke-5. Median = 14 cm. Artinya, empat tanaman lebih pendek dari 14 cm dan empat tanaman lebih tinggi dari 14 cm."
    }
];

// =====================================================
// 2. NAVIGASI HALAMAN
// =====================================================

function tampilkanHalaman(halaman) {
    const konten = document.getElementById("konten");

    if (!konten) return;
console.log("Halaman yang dipilih:", halaman);
    if (halaman === "beranda") {
        tampilkanBeranda(konten);
    } else if (halaman === "materi") {
        tampilkanMateri(konten);
    } else if (halaman === "latihan") {
    tampilkanLatihan(konten);
} else if (halaman === "kalkulator") {
    console.log("Masuk ke fungsi kalkulator");
    tampilkanKalkulator(konten);
} else if (halaman === "ai") {
    tampilkanAITutor(konten);
}
}

// =====================================================
// 3. HALAMAN BERANDA
// =====================================================

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
                Di sini kamu akan belajar mengurutkan data,
                menemukan nilai tengah, memahami rumus median,
                dan menyelesaikan berbagai persoalan statistika.
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
<div class="kartu">
    <h3>🧮 Kalkulator Median</h3>
    <p>
        Masukkan sekumpulan angka dan hitung median
        secara otomatis lengkap dengan langkah penyelesaiannya.
    </p>
    <button onclick="tampilkanHalaman('kalkulator')">
        Buka Kalkulator
    </button>
</div>
            <div class="kartu">
                <h3>🤖 AI Tutor Median</h3>
                <p>
                    Ajukan pertanyaan dan pelajari kembali
                    konsep median melalui tutor pembelajaran.
                </p>
                <button onclick="tampilkanHalaman('ai')">
                    Tanya Tutor
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

// =====================================================
// 4. HALAMAN MATERI PEMBELAJARAN MEDIAN
// =====================================================

function tampilkanMateri(konten) {
    konten.innerHTML = `
        <section class="judul-halaman">
            <h2>📚 Materi Pembelajaran Median</h2>
            <p>
                Kenali, pahami, dan kuasai konsep median melalui
                penjelasan lengkap serta contoh soal berikut.
            </p>
        </section>

        <!-- MATERI 1 -->
        <section class="materi-card">
            <h3>🌷 1. Mengenal Statistika</h3>
            <p>
                Statistika merupakan ilmu yang mempelajari cara
                mengumpulkan, mengolah, menyajikan, menganalisis,
                dan menarik kesimpulan berdasarkan data.
            </p>
            <p>
                Dalam kehidupan sehari-hari, kita sering menemukan
                data, seperti nilai ujian, tinggi badan, jumlah
                pengunjung perpustakaan, dan waktu belajar.
            </p>
            <div class="contoh-box">
                <strong>Contoh:</strong>
                <p>
                    Seorang guru mencatat nilai lima mahasiswa,
                    yaitu 70, 80, 75, 90, dan 85. Data tersebut
                    dapat diolah untuk mengetahui nilai tengah
                    atau median.
                </p>
            </div>
        </section>

        <!-- MATERI 2 -->
        <section class="materi-card">
            <h3>🌷 2. Pengertian Median</h3>
            <p>
                Median adalah nilai tengah dari sekumpulan data
                yang telah diurutkan terlebih dahulu, baik dari
                nilai terkecil ke terbesar maupun sebaliknya.
            </p>
            <p>
                Median termasuk salah satu ukuran pemusatan data
                yang digunakan untuk menggambarkan posisi tengah
                suatu kumpulan data.
            </p>
            <div class="contoh-box">
                <strong>Contoh sederhana:</strong>
                <p>Data: 3, 5, 7, 9, 11.</p>
                <p>Nilai yang berada tepat di tengah adalah 7.</p>
                <p><strong>Jadi, median = 7.</strong></p>
            </div>
            <div class="catatan-box">
                💡 Ingat! Data harus diurutkan sebelum menentukan
                median.
            </div>
        </section>

        <!-- MATERI 3 -->
        <section class="materi-card">
            <h3>🌷 3. Manfaat Median</h3>
            <p>Median memiliki beberapa manfaat, antara lain:</p>
            <ul>
                <li>Menunjukkan nilai tengah suatu kumpulan data.</li>
                <li>Membantu menggambarkan kondisi umum suatu kelompok.</li>
                <li>Relatif tidak terpengaruh oleh nilai yang terlalu besar atau terlalu kecil.</li>
                <li>Membantu membandingkan dua kelompok data.</li>
                <li>Digunakan dalam analisis data di berbagai bidang.</li>
            </ul>
            <div class="contoh-box">
                <strong>Contoh dalam kehidupan sehari-hari:</strong>
                <p>
                    Median pendapatan dapat digunakan untuk
                    menggambarkan posisi tengah pendapatan
                    masyarakat, terutama ketika terdapat
                    beberapa pendapatan yang sangat tinggi.
                </p>
            </div>
        </section>

        <!-- MATERI 4 -->
        <section class="materi-card">
            <h3>🌷 4. Jenis Data dalam Median</h3>
            <p>
                Sebelum menghitung median, kita perlu memahami
                bentuk data yang akan diolah.
            </p>

            <h4>A. Data Tunggal</h4>
            <p>
                Data tunggal adalah data yang disajikan satu per
                satu dan belum dikelompokkan ke dalam interval kelas.
            </p>
            <div class="contoh-box">
                Contoh: 4, 6, 7, 8, 10.
            </div>

            <h4>B. Data Berkelompok</h4>
            <p>
                Data berkelompok adalah data yang disajikan dalam
                bentuk kelompok atau interval kelas beserta
                frekuensinya.
            </p>
            <div class="contoh-box">
                <strong>Contoh tabel:</strong>
                <table>
                    <thead>
                        <tr>
                            <th>Interval Nilai</th>
                            <th>Frekuensi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>40–49</td><td>3</td></tr>
                        <tr><td>50–59</td><td>5</td></tr>
                        <tr><td>60–69</td><td>8</td></tr>
                        <tr><td>70–79</td><td>6</td></tr>
                        <tr><td>80–89</td><td>3</td></tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- MATERI 5 -->
        <section class="materi-card">
            <h3>🌷 5. Langkah Umum Menentukan Median</h3>
            <p>Untuk menentukan median data tunggal, lakukan langkah berikut:</p>
            <ol>
                <li>Perhatikan seluruh data yang diketahui.</li>
                <li>Urutkan data dari nilai terkecil hingga terbesar.</li>
                <li>Hitung banyaknya data (n).</li>
                <li>Tentukan apakah banyak data ganjil atau genap.</li>
                <li>Tentukan nilai tengah sesuai rumus median.</li>
                <li>Tuliskan kesimpulan berdasarkan konteks soal.</li>
            </ol>
            <div class="catatan-box">
                💡 Kunci utama: urutkan data terlebih dahulu,
                kemudian tentukan posisi nilai tengahnya.
            </div>
        </section>

        <!-- MATERI 6 -->
        <section class="materi-card">
            <h3>🌷 6. Median Data Tunggal Berjumlah Ganjil</h3>
            <p>
                Jika banyak data berjumlah ganjil, median merupakan
                satu nilai yang tepat berada di tengah setelah
                data diurutkan.
            </p>

            <div class="rumus-box">
                <h4>Rumus posisi median</h4>
                <p class="rumus">Me = data ke-((n + 1) / 2)</p>
                <p>
                    Keterangan: n adalah banyaknya data.
                </p>
            </div>

            <h4>Contoh soal</h4>
            <p>Tentukan median dari data berikut:</p>
            <p class="data-contoh">8, 3, 5, 7, 9</p>

            <h4>Penyelesaian</h4>
            <ol>
                <li>Urutkan data: 3, 5, 7, 8, 9.</li>
                <li>Banyak data: n = 5.</li>
                <li>Posisi median = (5 + 1) / 2 = 3.</li>
                <li>Data ke-3 adalah 7.</li>
            </ol>
            <div class="hasil-box">
                <strong>Jadi, median = 7.</strong>
            </div>
        </section>

        <!-- MATERI 7 -->
        <section class="materi-card">
            <h3>🌷 7. Median Data Tunggal Berjumlah Genap</h3>
            <p>
                Jika banyak data berjumlah genap, median diperoleh
                dengan menghitung rata-rata dari dua nilai yang
                berada tepat di tengah setelah data diurutkan.
            </p>

            <div class="rumus-box">
                <h4>Rumus median</h4>
                <p class="rumus">
                    Me = (data ke-(n/2) + data ke-(n/2 + 1)) / 2
                </p>
            </div>

            <h4>Contoh soal</h4>
            <p>Tentukan median dari data berikut:</p>
            <p class="data-contoh">9, 4, 7, 3, 8, 5</p>

            <h4>Penyelesaian</h4>
            <ol>
                <li>Urutkan data: 3, 4, 5, 7, 8, 9.</li>
                <li>Banyak data: n = 6.</li>
                <li>Dua data tengah adalah data ke-3 dan ke-4.</li>
                <li>Dua data tengah tersebut adalah 5 dan 7.</li>
                <li>Median = (5 + 7) / 2 = 6.</li>
            </ol>
            <div class="hasil-box">
                <strong>Jadi, median = 6.</strong>
            </div>
        </section>

        <!-- MATERI 8 -->
        <section class="materi-card">
            <h3>🌷 8. Median Data Berkelompok</h3>
            <p>
                Median data berkelompok adalah nilai tengah yang
                ditentukan dari distribusi frekuensi berbentuk
                interval kelas.
            </p>

            <div class="rumus-box">
                <h4>Rumus median data berkelompok</h4>
                <p class="rumus">
                    Me = Tb + ((n/2 - F) / f) × p
                </p>
                <p><strong>Keterangan:</strong></p>
                <ul>
                    <li>Me = median.</li>
                    <li>Tb = tepi bawah kelas median.</li>
                    <li>n = jumlah seluruh frekuensi.</li>
                    <li>F = frekuensi kumulatif sebelum kelas median.</li>
                    <li>f = frekuensi kelas median.</li>
                    <li>p = panjang kelas interval.</li>
                </ul>
            </div>

            <h4>Contoh soal</h4>
            <p>
                Perhatikan distribusi frekuensi nilai berikut.
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Interval</th>
                        <th>Frekuensi</th>
                        <th>Frekuensi Kumulatif</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>40–49</td><td>3</td><td>3</td></tr>
                    <tr><td>50–59</td><td>5</td><td>8</td></tr>
                    <tr><td>60–69</td><td>8</td><td>16</td></tr>
                    <tr><td>70–79</td><td>6</td><td>22</td></tr>
                    <tr><td>80–89</td><td>3</td><td>25</td></tr>
                </tbody>
            </table>

            <h4>Penyelesaian</h4>
            <ol>
                <li>Jumlah frekuensi: n = 25.</li>
                <li>Posisi median: n/2 = 12,5.</li>
                <li>Kelas median adalah 60–69 karena frekuensi kumulatifnya pertama kali mencapai atau melebihi 12,5.</li>
                <li>Tb = 59,5; F = 8; f = 8; p = 10.</li>
                <li>Me = 59,5 + ((12,5 - 8) / 8) × 10.</li>
                <li>Me = 59,5 + 5,625 = 65,125.</li>
            </ol>
            <div class="hasil-box">
                <strong>Jadi, median data berkelompok = 65,125.</strong>
            </div>
        </section>

        <!-- MATERI 9 -->
        <section class="materi-card">
            <h3>🌷 9. Perbedaan Mean, Median, dan Modus</h3>
            <p>
                Mean, median, dan modus merupakan ukuran
                pemusatan data. Ketiganya memiliki cara
                perhitungan dan kegunaan yang berbeda.
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Ukuran</th>
                        <th>Pengertian</th>
                        <th>Cara Menentukan</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mean</td>
                        <td>Rata-rata data.</td>
                        <td>Jumlah seluruh data dibagi banyak data.</td>
                    </tr>
                    <tr>
                        <td>Median</td>
                        <td>Nilai tengah.</td>
                        <td>Urutkan data dan tentukan nilai tengah.</td>
                    </tr>
                    <tr>
                        <td>Modus</td>
                        <td>Nilai yang paling sering muncul.</td>
                        <td>Perhatikan frekuensi kemunculan data.</td>
                    </tr>
                </tbody>
            </table>

            <h4>Contoh</h4>
            <p>Data: 2, 3, 3, 4, 8.</p>
            <ul>
                <li>Mean = (2 + 3 + 3 + 4 + 8) / 5 = 4.</li>
                <li>Median = 3.</li>
                <li>Modus = 3.</li>
            </ul>
            <div class="catatan-box">
                💡 Ketiga ukuran tersebut dapat menghasilkan
                nilai berbeda. Pemilihannya perlu disesuaikan
                dengan karakteristik data dan tujuan analisis.
            </div>
        </section>

        <!-- MATERI 10 -->
        <section class="materi-card">
            <h3>🌷 10. Penerapan Median dalam Kehidupan Sehari-hari</h3>
            <p>
                Median tidak hanya digunakan dalam soal matematika,
                tetapi juga dapat diterapkan dalam berbagai situasi.
            </p>

            <div class="contoh-box">
                <h4>📖 Bidang Pendidikan</h4>
                <p>
                    Median nilai ujian dapat membantu menggambarkan
                    posisi tengah hasil belajar mahasiswa.
                </p>
            </div>

            <div class="contoh-box">
                <h4>🏠 Bidang Ekonomi</h4>
                <p>
                    Median pendapatan dapat menggambarkan posisi
                    tengah pendapatan suatu kelompok masyarakat.
                </p>
            </div>

            <div class="contoh-box">
                <h4>🌱 Bidang Pertanian</h4>
                <p>
                    Median tinggi tanaman dapat digunakan untuk
                    mengetahui tinggi tengah tanaman dalam suatu
                    kelompok pengamatan.
                </p>
            </div>

            <div class="contoh-box">
                <h4>🚴 Bidang Transportasi</h4>
                <p>
                    Median waktu perjalanan dapat membantu
                    menggambarkan waktu tempuh yang umum terjadi.
                </p>
            </div>
        </section>

        <!-- MATERI 11 -->
        <section class="materi-card">
            <h3>🌷 11. Kesalahan yang Sering Terjadi Saat Menentukan Median</h3>
            <p>Beberapa kesalahan yang perlu dihindari adalah:</p>
            <ol>
                <li>
                    <strong>Tidak mengurutkan data.</strong>
                    Median ditentukan setelah data disusun secara berurutan.
                </li>
                <li>
                    <strong>Salah menentukan banyak data.</strong>
                    Hitung jumlah data dengan teliti.
                </li>
                <li>
                    <strong>Salah memilih posisi tengah.</strong>
                    Data ganjil memiliki satu nilai tengah, sedangkan data genap memiliki dua nilai tengah.
                </li>
                <li>
                    <strong>Lupa membagi dua pada data genap.</strong>
                    Dua nilai tengah harus dihitung rata-ratanya.
                </li>
                <li>
                    <strong>Tidak menuliskan satuan.</strong>
                    Kesimpulan perlu disesuaikan dengan konteks soal.
                </li>
            </ol>
            <div class="catatan-box">
                💡 Periksa kembali urutan data, posisi median,
                perhitungan, dan kesimpulan sebelum menyelesaikan soal.
            </div>
        </section>

        <!-- MATERI 12 -->
        <section class="materi-card">
            <h3>🌷 12. Rangkuman Materi Median</h3>
            <p>
                Setelah mempelajari seluruh materi, mari kita
                ingat kembali konsep-konsep penting berikut.
            </p>
            <ul>
                <li>Median adalah nilai tengah dari data yang telah diurutkan.</li>
                <li>Data ganjil memiliki satu nilai tepat di tengah.</li>
                <li>Data genap memiliki dua nilai tengah yang dirata-ratakan.</li>
                <li>Median data berkelompok menggunakan rumus khusus berdasarkan frekuensi.</li>
                <li>Median relatif tahan terhadap pengaruh nilai ekstrem.</li>
                <li>Median dapat digunakan untuk menganalisis berbagai persoalan sehari-hari.</li>
            </ul>

            <div class="hasil-box">
                <h4>🎀 Kesimpulan</h4>
                <p>
                    Median merupakan salah satu ukuran pemusatan data
                    yang penting dalam statistika. Dengan memahami
                    cara mengurutkan data, menentukan posisi tengah,
                    dan menafsirkan hasilnya, kita dapat menggunakan
                    median untuk menyelesaikan berbagai permasalahan
                    secara tepat.
                </p>
            </div>

            <div class="tombol-materi">
                <button onclick="tampilkanHalaman('latihan')">
                    ✏️ Lanjut ke Latihan Soal
                </button>
                <button onclick="tampilkanHalaman('ai')">
                    🤖 Tanya AI Tutor
                </button>
            </div>
        </section>
    `;
}

// =====================================================
// 5. HALAMAN LATIHAN SOAL
// =====================================================

function tampilkanLatihan(konten) {
    let html = `
        <section class="judul-halaman">
            <h2>✏️ Latihan Literasi Matematika</h2>
            <p>
                Kerjakan lima soal berikut dengan teliti.
                Bacalah setiap permasalahan, tuliskan proses
                penyelesaian, dan sampaikan kesimpulanmu.
            </p>
        </section>

        <section class="petunjuk-latihan">
            <h3>🌷 Petunjuk Pengerjaan</h3>
            <ol>
                <li>Baca setiap soal dengan cermat.</li>
                <li>Identifikasi informasi yang diketahui dan ditanyakan.</li>
                <li>Tuliskan langkah penyelesaian secara sistematis.</li>
                <li>Gunakan konsep median yang telah dipelajari.</li>
                <li>Berikan kesimpulan sesuai konteks permasalahan.</li>
            </ol>
            <p><strong>Jumlah soal:</strong> 5 soal.</p>
            <p><strong>Skor maksimal:</strong> 30 poin.</p>
        </section>
    `;

    soalInstrumen.forEach((soal, i) => {
        html += `
            <section class="soal-card">
                <div class="nomor-soal">
                    <span>SOAL ${i + 1}</span>
                    <span>${soal.indikator}</span>
                </div>

                <h3>${soal.judul}</h3>

                <div class="pertanyaan-soal">
                    <p>${soal.soal}</p>
                </div>

                <div class="tahapan-rmt">
                    <h4>🧠 Tahapan Penyelesaian RMT</h4>
                    <p>
                        Lengkapi setiap tahapan berikut sesuai
                        pemahamanmu.
                    </p>
        `;

        soal.tahapan.forEach((tahap, j) => {
            html += `
                <div class="tahap-card">
                    <div class="tahap-header">
                        <span class="label-rmt">${tahap.rmt}</span>
                        <span class="bobot-skor">
                            Maksimal ${tahap.bobot} poin
                        </span>
                    </div>

                    <p class="pertanyaan-tahap">
                        ${j + 1}. ${tahap.prompt}
                    </p>

                    <textarea
                        id="jawaban-${i}-${j}"
                        rows="4"
                        placeholder="Tuliskan jawaban dan proses berpikirmu di sini..."
                    ></textarea>

                    <div class="penilaian-tahap">
                        <label for="skor-${i}-${j}">
                            Skor tahapan:
                        </label>

                        <select
                            id="skor-${i}-${j}"
                            onchange="perbaruiSubtotal(${i})"
                        >
                            ${Array.from(
                                { length: tahap.bobot + 1 },
                                (_, nilai) => `
                                    <option value="${nilai}">
                                        ${nilai} poin
                                    </option>
                                `
                            ).join("")}
                        </select>
                    </div>
                </div>
            `;
        });

        html += `
                </div>

                <div class="subtotal-soal">
                    <span>Subtotal Soal ${i + 1}</span>
                    <strong id="subtotal-${i}">
                        0 / 6
                    </strong>
                </div>

                <div class="pembahasan-soal">
                    <button
                        type="button"
                        onclick="tampilkanPembahasan(${i})"
                    >
                        📖 Lihat Pembahasan
                    </button>

                    <div
                        id="pembahasan-${i}"
                        class="isi-pembahasan"
                        style="display: none;"
                    >
                        <h4>💡 Pembahasan Soal</h4>
                        <p>${soal.pembahasan}</p>
                    </div>
                </div>
            </section>
        `;
    });

    html += `
        <section class="hasil-penilaian">
            <h3>🎀 Hasil Penilaian</h3>

            <p>
                Pilih skor setiap tahapan berdasarkan kualitas
                jawaban. Skor dapat digunakan oleh pengajar
                untuk menilai proses berpikir mahasiswa.
            </p>

            <div class="total-skor">
                <span>Total Skor</span>
                <strong id="total-skor">0 / 30</strong>
            </div>

            <div id="kategori-skor" class="kategori-skor">
                Selesaikan latihan dan periksa hasil penilaianmu.
            </div>

            <button
                type="button"
                onclick="hitungSkorInstrumen()"
            >
                🌸 Hitung Total Skor
            </button>

            <button
                type="button"
                onclick="periksaSemuaJawaban()"
            >
                📖 Tampilkan Semua Pembahasan
            </button>
        </section>
    `;

    konten.innerHTML = html;

    soalInstrumen.forEach((_, i) => {
        perbaruiSubtotal(i);
    });
}

// =====================================================
// 6. FUNGSI MENAMPILKAN PEMBAHASAN
// =====================================================

function tampilkanPembahasan(index) {
    const pembahasan = document.getElementById(
        `pembahasan-${index}`
    );

    if (!pembahasan) return;

    if (pembahasan.style.display === "none") {
        pembahasan.style.display = "block";
    } else {
        pembahasan.style.display = "none";
    }
}

// =====================================================
// 7. MENGHITUNG SUBTOTAL SETIAP SOAL
// =====================================================

function perbaruiSubtotal(index) {
    const soal = soalInstrumen[index];

    if (!soal) return;

    let subtotal = 0;

    soal.tahapan.forEach((tahap, j) => {
        const pilihanSkor = document.getElementById(
            `skor-${index}-${j}`
        );

        if (pilihanSkor) {
            let nilai = Number(pilihanSkor.value);

            if (Number.isFinite(nilai)) {
                nilai = Math.max(
                    0,
                    Math.min(tahap.bobot, nilai)
                );

                subtotal += nilai;
            }
        }
    });

    const elemenSubtotal = document.getElementById(
        `subtotal-${index}`
    );

    if (elemenSubtotal) {
        elemenSubtotal.textContent = `${subtotal} / 6`;
    }

    return subtotal;
}

// =====================================================
// 8. MENGHITUNG TOTAL SKOR
// =====================================================

function hitungSkorInstrumen() {
    let total = 0;

    soalInstrumen.forEach((_, i) => {
        total += perbaruiSubtotal(i) || 0;
    });

    const elemenTotal = document.getElementById("total-skor");
    const elemenKategori = document.getElementById("kategori-skor");

    if (elemenTotal) {
        elemenTotal.textContent = `${total} / 30`;
    }

    let kategori = "";

    if (total >= 27) {
        kategori = "Sangat Baik 🌟";
    } else if (total >= 22) {
        kategori = "Baik 🌷";
    } else if (total >= 16) {
        kategori = "Cukup 💗";
    } else if (total >= 10) {
        kategori = "Perlu Latihan Lagi 🌱";
    } else {
        kategori = "Ayo Belajar Kembali! 💪";
    }

    if (elemenKategori) {
        elemenKategori.innerHTML = `
            <strong>${kategori}</strong>
            <p>
                Kamu memperoleh ${total} dari 30 poin.
                Teruslah berlatih untuk meningkatkan
                pemahaman konsep median.
            </p>
        `;
    }

    return total;
}

// =====================================================
// 9. MENAMPILKAN SEMUA PEMBAHASAN
// =====================================================

function periksaSemuaJawaban() {
    soalInstrumen.forEach((_, i) => {
        const pembahasan = document.getElementById(
            `pembahasan-${i}`
        );

        if (pembahasan) {
            pembahasan.style.display = "block";
        }
    });

    hitungSkorInstrumen();
}

// =====================================================
// 10. HALAMAN AI TUTOR MEDIAN
// =====================================================

function tampilkanAITutor(konten) {
    konten.innerHTML = `
        <section class="judul-halaman">
            <h2>🤖 AI Tutor Median</h2>
            <p>
                Belajar konsep median dengan bantuan
                tutor pembelajaran interaktif.
            </p>
        </section>

        <section class="ai-tutor">

            <div class="sambutan-ai">
                <h3>🌸 Halo, Selamat Datang!</h3>
                <p>
                    Aku adalah tutor pembelajaran median.
                    Kamu bisa bertanya tentang pengertian median,
                    rumus, contoh soal, data ganjil, data genap,
                    dan materi lainnya.
                </p>
            </div>

            <div
                class="percakapan-ai"
                id="percakapan-ai"
            >
                <div class="pesan-ai">
                    <strong>🤖 AI Tutor</strong>
                    <p>
                        Hai! Senang bertemu denganmu.
                        Yuk, belajar median bersama!
                        Pilih salah satu pertanyaan atau
                        tuliskan pertanyaanmu sendiri. 🌷
                    </p>
                </div>
            </div>

            <div class="input-ai">
                <label for="pertanyaan-ai">
                    💬 Tulis pertanyaanmu:
                </label>

                <textarea
                    id="pertanyaan-ai"
                    placeholder="Contoh: Bagaimana cara menghitung median data genap?"
                ></textarea>

                <button
                    type="button"
                    onclick="kirimPertanyaanAI()"
                >
                    Kirim Pertanyaan ✨
                </button>
            </div>

            <div class="contoh-pertanyaan">
                <h3>🌷 Contoh Pertanyaan</h3>

                <p>
                    Klik salah satu pertanyaan untuk
                    melihat penjelasannya.
                </p>

                <button
                    type="button"
                    onclick="tanyaContohAI('Apa pengertian median?')"
                >
                    Apa pengertian median?
                </button>

                <button
                    type="button"
                    onclick="tanyaContohAI('Bagaimana cara menghitung median data ganjil?')"
                >
                    Cara menghitung median data ganjil?
                </button>

                <button
                    type="button"
                    onclick="tanyaContohAI('Bagaimana cara menghitung median data genap?')"
                >
                    Cara menghitung median data genap?
                </button>

                <button
                    type="button"
                    onclick="tanyaContohAI('Berikan contoh soal median beserta penyelesaiannya.')"
                >
                    Contoh soal median dan penyelesaiannya?
                </button>

                <button
                    type="button"
                    onclick="tanyaContohAI('Apa perbedaan mean, median, dan modus?')"
                >
                    Perbedaan mean, median, dan modus?
                </button>
            </div>

            <div class="catatan-ai">
                <p>
                    <strong>Catatan:</strong>
                    Tutor ini menggunakan kumpulan jawaban
                    berbasis materi median yang telah disiapkan.
                    Jawabannya terbatas pada topik yang tersedia
                    dan bukan layanan AI generatif yang terhubung
                    ke internet.
                </p>
            </div>

        </section>
    `;
}

// =====================================================
// 11. FUNGSI PERTANYAAN CONTOH AI
// =====================================================

function tanyaContohAI(pertanyaan) {
    const input = document.getElementById("pertanyaan-ai");

    if (!input) return;

    input.value = pertanyaan;

    kirimPertanyaanAI();
}

// =====================================================
// 12. FUNGSI MENGIRIM PERTANYAAN KE AI TUTOR
// =====================================================

function kirimPertanyaanAI() {
    const input = document.getElementById("pertanyaan-ai");
    const percakapan = document.getElementById("percakapan-ai");

    if (!input || !percakapan) return;

    const pertanyaan = input.value.trim();

    if (pertanyaan === "") {
        alert("Silakan tuliskan pertanyaan terlebih dahulu, ya! 🌷");
        return;
    }

    const jawaban = jawabPertanyaanMedian(pertanyaan);

    const pesanPengguna = document.createElement("div");
    pesanPengguna.className = "pesan-pengguna";

    const judulPengguna = document.createElement("strong");
    judulPengguna.textContent = "👩 Kamu";

    const isiPengguna = document.createElement("p");
    isiPengguna.textContent = pertanyaan;

    pesanPengguna.appendChild(judulPengguna);
    pesanPengguna.appendChild(isiPengguna);

    const pesanTutor = document.createElement("div");
    pesanTutor.className = "pesan-ai";

    const judulTutor = document.createElement("strong");
    judulTutor.textContent = "🤖 AI Tutor";

    const isiTutor = document.createElement("p");
    isiTutor.innerHTML = jawaban;

    pesanTutor.appendChild(judulTutor);
    pesanTutor.appendChild(isiTutor);

    percakapan.appendChild(pesanPengguna);
    percakapan.appendChild(pesanTutor);

    input.value = "";

    percakapan.scrollTop = percakapan.scrollHeight;
}

// =====================================================
// 13. BASIS JAWABAN AI TUTOR MEDIAN
// =====================================================

function jawabPertanyaanMedian(pertanyaan) {
    const teks = pertanyaan.toLowerCase().trim();

    // 1. Ucapan terima kasih
    if (
        teks.includes("terima kasih") ||
        teks.includes("makasih")
    ) {
        return `
            Sama-sama! 🌷 Senang bisa membantu kamu belajar.
            Terus berlatih agar semakin memahami konsep median.
        `;
    }

    // 2. Median data berkelompok
    if (
        teks.includes("berkelompok") ||
        teks.includes("interval kelas") ||
        teks.includes("frekuensi kumulatif")
    ) {
        return `
            <strong>Median Data Berkelompok</strong><br><br>

            Median data berkelompok ditentukan menggunakan rumus:<br><br>

            <strong>Me = Tb + ((n/2 - F) / f) × p</strong><br><br>

            Keterangan:<br>
            • Tb = tepi bawah kelas median.<br>
            • n = jumlah seluruh frekuensi.<br>
            • F = frekuensi kumulatif sebelum kelas median.<br>
            • f = frekuensi kelas median.<br>
            • p = panjang kelas interval.<br><br>

            Langkah pertama adalah menghitung jumlah frekuensi,
            kemudian menentukan kelas median melalui frekuensi kumulatif.
        `;
    }

    // 3. Perbedaan mean, median, dan modus
    if (
        teks.includes("perbedaan") ||
        teks.includes("beda mean") ||
        teks.includes("mean median") ||
        teks.includes("median dan modus") ||
        teks.includes("mean dan modus")
    ) {
        return `
            <strong>Perbedaan Mean, Median, dan Modus</strong><br><br>

            1. <strong>Mean:</strong> jumlah seluruh data dibagi banyaknya data.<br>
            2. <strong>Median:</strong> nilai tengah setelah data diurutkan.<br>
            3. <strong>Modus:</strong> nilai yang paling sering muncul.<br><br>

            Contoh data: 2, 3, 3, 4, 8.<br>
            Mean = 20 / 5 = 4.<br>
            Median = 3.<br>
            Modus = 3.
        `;
    }

    // 4. Pengertian median
    if (
        teks.includes("pengertian") ||
        teks.includes("apa itu median") ||
        teks.includes("definisi median") ||
        teks.includes("arti median")
    ) {
        return `
            <strong>Pengertian Median</strong><br><br>

            Median adalah nilai tengah dari sekumpulan data
            yang telah diurutkan terlebih dahulu dari nilai
            terkecil hingga terbesar atau sebaliknya.<br><br>

            Median merupakan salah satu ukuran pemusatan data.
            Median membantu menggambarkan posisi tengah suatu
            kumpulan data dan relatif tidak terpengaruh oleh
            nilai ekstrem.
        `;
    }

    // 5. Rumus median
    if (
        teks.includes("rumus") ||
        teks.includes("formula")
    ) {
        return `
            <strong>Rumus Median Data Tunggal</strong><br><br>

            <strong>Data ganjil:</strong><br>
            Posisi median = (n + 1) / 2.<br><br>

            <strong>Data genap:</strong><br>
            Median = (data tengah pertama + data tengah kedua) / 2.<br><br>

            <strong>Data berkelompok:</strong><br>
            Me = Tb + ((n/2 - F) / f) × p.<br><br>

            Ingat, data tunggal harus diurutkan terlebih dahulu
            sebelum menentukan median.
        `;
    }

    // 6. Median data ganjil
    if (
        teks.includes("ganjil") ||
        teks.includes("jumlah data ganjil")
    ) {
        return `
            <strong>Cara Menghitung Median Data Ganjil</strong><br><br>

            Jika banyak data ganjil, median merupakan satu
            nilai yang berada tepat di tengah setelah data diurutkan.<br><br>

            Contoh: 3, 5, 7, 9, 11.<br>
            Banyak data = 5.<br>
            Posisi median = (5 + 1) / 2 = 3.<br>
            Data ke-3 adalah 7.<br><br>

            Jadi, median dari data tersebut adalah <strong>7</strong>.
        `;
    }

    // 7. Median data genap
    if (
        teks.includes("genap") ||
        teks.includes("jumlah data genap")
    ) {
        return `
            <strong>Cara Menghitung Median Data Genap</strong><br><br>

            Jika banyak data genap, median diperoleh dengan
            menghitung rata-rata dari dua nilai tengah.<br><br>

            Contoh: 2, 4, 6, 8.<br>
            Banyak data = 4.<br>
            Dua nilai tengah adalah 4 dan 6.<br>
            Median = (4 + 6) / 2 = 5.<br><br>

            Jadi, median dari data tersebut adalah <strong>5</strong>.
        `;
    }

    // 8. Mengurutkan data
    if (
        teks.includes("urut") ||
        teks.includes("mengurutkan") ||
        teks.includes("diurutkan")
    ) {
        return `
            <strong>Cara Mengurutkan Data</strong><br><br>

            Mengurutkan data berarti menyusun angka dari
            nilai terkecil hingga terbesar atau sebaliknya.<br><br>

            Contoh data awal:<br>
            8, 2, 5, 1, 4.<br><br>

            Setelah diurutkan:<br>
            1, 2, 4, 5, 8.<br><br>

            Pengurutan sangat penting karena median ditentukan
            berdasarkan posisi data setelah diurutkan.
        `;
    }

    // 9. Pengaruh nilai ekstrem
    if (
        teks.includes("ekstrem") ||
        teks.includes("pencilan") ||
        teks.includes("outlier") ||
        teks.includes("nilai jauh")
    ) {
        return `
            <strong>Pengaruh Nilai Ekstrem terhadap Median</strong><br><br>

            Nilai ekstrem adalah nilai yang jauh lebih besar
            atau lebih kecil dibandingkan sebagian besar data.<br><br>

            Contoh: 2, 3, 3, 4, 18.<br>
            Mean = 6, sedangkan median = 3.<br><br>

            Nilai 18 menaikkan rata-rata. Median tetap berada
            pada nilai tengah, yaitu 3. Karena itu, median
            sering lebih tepat untuk menggambarkan data
            yang memiliki nilai ekstrem.
        `;
    }

    // 10. Contoh soal
    if (
        teks.includes("contoh") ||
        teks.includes("latihan") ||
        teks.includes("penyelesaian")
    ) {
        return `
            <strong>Contoh Soal Median</strong><br><br>

            Tentukan median dari data berikut:<br>
            8, 3, 5, 7, 9.<br><br>

            <strong>Langkah 1:</strong> Urutkan data.<br>
            3, 5, 7, 8, 9.<br><br>

            <strong>Langkah 2:</strong> Hitung banyak data.<br>
            n = 5, termasuk data ganjil.<br><br>

            <strong>Langkah 3:</strong> Tentukan posisi median.<br>
            (5 + 1) / 2 = 3.<br><br>

            <strong>Langkah 4:</strong> Ambil data ke-3.<br>
            Data ke-3 adalah 7.<br><br>

            Jadi, median = <strong>7</strong>.
        `;
    }

    // 11. Pertanyaan yang belum dikenali
    return `
        Maaf, aku belum dapat memahami pertanyaan tersebut
        dengan tepat. 🌷<br><br>

        Aku adalah tutor berbasis kumpulan jawaban materi
        pembelajaran median, sehingga belum bisa menjawab
        semua pertanyaan secara bebas.<br><br>

        Coba tanyakan salah satu topik berikut:<br>
        • Pengertian median.<br>
        • Rumus median.<br>
        • Median data ganjil dan genap.<br>
        • Median data berkelompok.<br>
        • Perbedaan mean, median, dan modus.<br>
        • Pengaruh nilai ekstrem.<br>
        • Contoh soal median.
    `;
}

// =====================================================
// 14. MENJALANKAN HALAMAN BERANDA SAAT WEBSITE DIBUKA
// =====================================================

document.addEventListener("DOMContentLoaded", function () {
    tampilkanHalaman("beranda");
});

// =====================================================
// 15. KALKULATOR MEDIAN OTOMATIS
// =====================================================

function tampilkanKalkulator(konten) {
    konten.innerHTML = `
        <section class="judul-halaman">
            <h2>🧮 Kalkulator Statistik Otomatis</h2>
            <p>
                Masukkan data angka untuk menghitung median,
                mean, dan modus secara otomatis.
            </p>
        </section>

        <section class="kalkulator-median">
            <div class="kalkulator-pengantar">
                <h3>🌷 Yuk, Hitung Data Bersama!</h3>
                <p>
                    Masukkan angka yang ingin dianalisis.
                    Pisahkan setiap angka menggunakan koma,
                    spasi, atau titik koma.
                </p>
            </div>

            <label for="data-median">
                <strong>Masukkan Data Angka</strong>
            </label>

            <textarea
                id="data-median"
                rows="4"
                placeholder="Contoh: 7, 3, 9, 5, 11"
            ></textarea>

            <div class="contoh-data-kalkulator">
                <p><strong>Contoh data:</strong></p>
                <button onclick="isiContohMedian('7, 3, 9, 5, 11')">
                    Data Ganjil
                </button>
                <button onclick="isiContohMedian('2, 4, 6, 8')">
                    Data Genap
                </button>
                <button onclick="isiContohMedian('2, 3, 3, 4, 18')">
                    Data dengan Nilai Ekstrem
                </button>
            </div>

            <div class="aksi-kalkulator">
                <button onclick="hitungMedianOtomatis()">
                    🧮 Hitung Statistik
                </button>

                <button
                    type="button"
                    onclick="resetKalkulatorMedian()"
                >
                    ↻ Hapus Data
                </button>
            </div>

            <p id="pesan-error-median" class="pesan-error-median"></p>

            <div
                id="hasil-kalkulator-median"
                class="hasil-kalkulator-median"
                aria-live="polite"
            ></div>
        </section>

        <div class="tombol-materi">
            <button onclick="tampilkanHalaman('materi')">
                📚 Kembali ke Materi
            </button>

            <button onclick="tampilkanHalaman('ai')">
                🤖 Tanya AI Tutor
            </button>
        </div>
    `;
}

// =====================================================
// 16. MENGISI CONTOH DATA
// =====================================================

function isiContohMedian(data) {
    const input = document.getElementById("data-median");

    if (!input) return;

    input.value = data;
    hitungMedianOtomatis();
}

// =====================================================
// 17. PROSES PERHITUNGAN STATISTIK
// =====================================================

function hitungMedianOtomatis() {
    const input = document.getElementById("data-median");
    const pesanError = document.getElementById("pesan-error-median");
    const hasil = document.getElementById("hasil-kalkulator-median");

    if (!input || !hasil || !pesanError) return;

    pesanError.textContent = "";
    hasil.innerHTML = "";

    const teks = input.value.trim();

    if (teks === "") {
        pesanError.textContent = "Silakan masukkan data angka terlebih dahulu.";
        return;
    }

    // Memisahkan angka berdasarkan koma, spasi, atau titik koma.
    const bagianData = teks.split(/[\s,;]+/);

    // Memastikan setiap bagian merupakan angka yang valid.
    const formatAngka = /^-?(?:\d+(?:\.\d*)?|\.\d+)$/;

    const dataValid = bagianData.every(angka => {
        return formatAngka.test(angka) && Number.isFinite(Number(angka));
    });

    if (!dataValid) {
        pesanError.textContent =
            "Data tidak valid. Masukkan angka saja dan gunakan titik untuk desimal, misalnya 2.5.";
        return;
    }

    const data = bagianData.map(Number);

    if (data.length < 1) {
        pesanError.textContent = "Masukkan minimal satu angka.";
        return;
    }

    // Mengurutkan data dari terkecil hingga terbesar.
    const dataUrut = [...data].sort((a, b) => a - b);

    const n = dataUrut.length;

    // Menghitung median.
    let median;
    let langkahMedian = "";

    if (n % 2 === 1) {
        const posisi = (n + 1) / 2;
        median = dataUrut[posisi - 1];

        langkahMedian = `
            Banyak data = ${n}, termasuk data ganjil.<br>
            Posisi median = (${n} + 1) / 2 = ${posisi}.<br>
            Median adalah data ke-${posisi}, yaitu
            <strong>${formatHasil(median)}.</strong>
        `;
    } else {
        const posisiKiri = n / 2;
        const posisiKanan = posisiKiri + 1;

        const nilaiKiri = dataUrut[posisiKiri - 1];
        const nilaiKanan = dataUrut[posisiKanan - 1];

        median = (nilaiKiri + nilaiKanan) / 2;

        langkahMedian = `
            Banyak data = ${n}, termasuk data genap.<br>
            Dua data tengah adalah data ke-${posisiKiri}
            dan ke-${posisiKanan}.<br>
            Median = (${formatHasil(nilaiKiri)} +
            ${formatHasil(nilaiKanan)}) / 2.<br>
            Median =
            <strong>${formatHasil(median)}.</strong>
        `;
    }

    // Menghitung mean.
    const jumlah = data.reduce((total, nilai) => total + nilai, 0);
    const mean = jumlah / n;

    // Menghitung modus.
    const frekuensi = {};

    data.forEach(nilai => {
        frekuensi[nilai] = (frekuensi[nilai] || 0) + 1;
    });

    const frekuensiTertinggi = Math.max(...Object.values(frekuensi));

    const modus = Object.keys(frekuensi)
        .filter(nilai => frekuensi[nilai] === frekuensiTertinggi)
        .map(Number)
        .sort((a, b) => a - b);

    const adaModus = frekuensiTertinggi > 1;

    const teksModus = adaModus
        ? modus.map(formatHasil).join(", ")
        : "Tidak ada modus";

    // Menghitung nilai minimum dan maksimum.
    const minimum = dataUrut[0];
    const maksimum = dataUrut[n - 1];

    // Menandai posisi tengah pada data yang sudah diurutkan.
    let dataTengah;

    if (n % 2 === 1) {
        dataTengah = [(n - 1) / 2];
    } else {
        dataTengah = [n / 2 - 1, n / 2];
    }

    const tampilanUrutan = dataUrut.map((nilai, index) => {
        const tengah = dataTengah.includes(index);

        return `
            <span class="${tengah ? "angka-tengah" : "angka-biasa"}">
                ${formatHasil(nilai)}
            </span>
        `;
    }).join(" ");

    // Menampilkan seluruh hasil.
    hasil.innerHTML = `
        <div class="hasil-statistik">
            <h3>🎀 Hasil Analisis Data</h3>

            <div class="kartu-hasil-median">
                <span>MEDIAN</span>
                <strong>${formatHasil(median)}</strong>
                <p>Nilai tengah dari data yang kamu masukkan.</p>
            </div>

            <div class="grid-hasil-statistik">
                <div>
                    <span>Mean</span>
                    <strong>${formatHasil(mean)}</strong>
                </div>

                <div>
                    <span>Modus</span>
                    <strong>${teksModus}</strong>
                </div>

                <div>
                    <span>Jumlah Data</span>
                    <strong>${n}</strong>
                </div>

                <div>
                    <span>Nilai Minimum</span>
                    <strong>${formatHasil(minimum)}</strong>
                </div>

                <div>
                    <span>Nilai Maksimum</span>
                    <strong>${formatHasil(maksimum)}</strong>
                </div>

                <div>
                    <span>Jumlah Seluruh Data</span>
                    <strong>${formatHasil(jumlah)}</strong>
                </div>
            </div>

            <div class="langkah-hitung-median">
                <h4>📚 Langkah Penyelesaian</h4>

                <p><strong>1. Data awal:</strong></p>
                <p>${data.map(formatHasil).join(", ")}</p>

                <p><strong>2. Data setelah diurutkan:</strong></p>
                <div class="urutan-hasil-median">
                    ${tampilanUrutan}
                </div>

                <p class="keterangan-tengah">
                    Angka berwarna merupakan posisi data tengah.
                </p>

                <p><strong>3. Menentukan median:</strong></p>
                <p>${langkahMedian}</p>

                <p><strong>4. Menghitung mean:</strong></p>
                <p>
                    Mean = jumlah seluruh data / banyak data<br>
                    Mean = ${formatHasil(jumlah)} / ${n}
                    = ${formatHasil(mean)}.
                </p>

                <p><strong>5. Menentukan modus:</strong></p>
                <p>
                    ${adaModus
                        ? `Nilai yang paling sering muncul adalah ${teksModus}, sebanyak ${frekuensiTertinggi} kali.`
                        : "Semua nilai hanya muncul satu kali, sehingga data tidak memiliki modus."}
                </p>
            </div>

            <div class="kesimpulan-kalkulator">
                <h4>💗 Kesimpulan</h4>
                <p>
                    Berdasarkan ${n} data yang dimasukkan,
                    diperoleh median sebesar
                    <strong>${formatHasil(median)}</strong>.
                    ${n % 2 === 1
                        ? "Median merupakan satu nilai yang berada tepat di tengah setelah data diurutkan."
                        : "Median diperoleh dari rata-rata dua nilai tengah setelah data diurutkan."}
                </p>
            </div>
        </div>
    `;

    return {
        data: dataUrut,
        median,
        mean,
        modus: adaModus ? modus : [],
        jumlah,
        minimum,
        maksimum
    };
}

// =====================================================
// 18. FORMAT ANGKA HASIL PERHITUNGAN
// =====================================================

function formatHasil(nilai) {
    return Number(nilai.toFixed(6)).toLocaleString("id-ID", {
        maximumFractionDigits: 6
    });
}

// =====================================================
// 19. RESET KALKULATOR
// =====================================================

function resetKalkulatorMedian() {
    const input = document.getElementById("data-median");
    const hasil = document.getElementById("hasil-kalkulator-median");
    const pesanError = document.getElementById("pesan-error-median");

    if (input) input.value = "";
    if (hasil) hasil.innerHTML = "";
    if (pesanError) pesanError.textContent = "";
}
