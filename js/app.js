
/* =====================================================
   BELAJAR MEDIAN
   Media Pembelajaran Statistika Interaktif
   Navigasi Utama Aplikasi
   ===================================================== */

// ==========================================
// FUNGSI NAVIGASI HALAMAN
// ==========================================

function tampilkanHalaman(halaman) {

    const konten = document.getElementById("konten");

    
// BERANDA
if (halaman === "beranda") {

    konten.innerHTML = `
        <section class="halaman-beranda">

            <div class="hero-beranda">
                <h2>🌷 Selamat Datang di Belajar Median!</h2>

                <h3>Belajar Statistika dengan Cara yang Menyenangkan</h3>

                <p>
                    Pernahkah kamu penasaran bagaimana menentukan
                    nilai tengah dari sekumpulan data?
                    Melalui aplikasi Belajar Median, kamu akan
                    mempelajari konsep median secara bertahap,
                    mulai dari memahami masalah, mengolah data,
                    hingga menjelaskan hasilnya.
                </p>

                <p>
                    Pembelajaran ini menggunakan pendekatan
                    <strong>Rigorous Mathematical Thinking (RMT)</strong>
                    untuk membantumu mengembangkan kemampuan
                    berpikir matematis secara terarah, teliti,
                    dan mendalam.
                </p>

                <button onclick="tampilkanHalaman('materi')">
                    🚀 Mulai Belajar
                </button>
            </div>

            <div class="kartu-beranda">
                <h3>📖 Mengenal Pembelajaran Median</h3>

                <p>
                    Median adalah salah satu ukuran pemusatan data
                    yang menunjukkan nilai tengah setelah data
                    diurutkan. Konsep ini dapat digunakan untuk
                    memahami berbagai informasi dalam kehidupan
                    sehari-hari.
                </p>

                <p>
                    Contohnya adalah menentukan nilai tengah hasil
                    ulangan, waktu belajar, jumlah pengunjung
                    perpustakaan, hingga tinggi tanaman.
                </p>
            </div>

            <div class="kartu-beranda">
                <h3>🎯 Tujuan Pembelajaran</h3>

                <p>Setelah mengikuti pembelajaran ini, kamu diharapkan mampu:</p>

                <ul>
                    <li>Menjelaskan pengertian dan kegunaan median.</li>
                    <li>Membedakan median pada data ganjil dan genap.</li>
                    <li>Mengurutkan data dan menentukan nilai median dengan benar.</li>
                    <li>Menyelesaikan permasalahan sehari-hari menggunakan konsep median.</li>
                    <li>Menjelaskan alasan dan menarik kesimpulan berdasarkan hasil perhitungan.</li>
                    <li>Mengomunikasikan proses penyelesaian masalah secara matematis.</li>
                </ul>
            </div>

            <div class="kartu-beranda">
                <h3>🧠 Bagaimana Cara Kamu Belajar?</h3>

                <p>
                    Kamu akan mengikuti tiga tahapan pembelajaran
                    berdasarkan pendekatan Rigorous Mathematical
                    Thinking (RMT).
                </p>

                <div class="alur-belajar">
                    <h4>1. Input – Memahami Informasi</h4>
                    <p>
                        Mengamati permasalahan, mengenali informasi
                        yang diketahui, dan menentukan hal yang
                        perlu dicari.
                    </p>

                    <h4>2. Elaboration – Mengolah dan Menalar</h4>
                    <p>
                        Mengurutkan data, memilih strategi,
                        melakukan perhitungan, dan memberikan
                        alasan matematis.
                    </p>

                    <h4>3. Output – Menyampaikan Hasil</h4>
                    <p>
                        Menjelaskan hasil penyelesaian,
                        menafsirkan makna median, dan membuat
                        kesimpulan berdasarkan permasalahan.
                    </p>
                </div>
            </div>

            <div class="kartu-beranda">
                <h3>🗺️ Petunjuk Penggunaan Aplikasi</h3>

                <ol>
                    <li>
                        Buka menu Materi untuk mempelajari
                        konsep dasar median.
                    </li>
                    <li>
                        Lanjutkan ke Aktivitas RMT untuk
                        mengikuti tahapan berpikir matematis.
                    </li>
                    <li>
                        Kerjakan Latihan Literasi Matematika
                        untuk menyelesaikan masalah kontekstual.
                    </li>
                    <li>
                        Gunakan Latihan Soal untuk menguji
                        pemahamanmu.
                    </li>
                    <li>
                        Manfaatkan AI Tutor jika membutuhkan
                        bantuan atau penjelasan tambahan.
                    </li>
                    <li>
                        Buka Hasil dan Refleksi untuk mengevaluasi
                        proses belajarmu.
                    </li>
                </ol>
            </div>

            <div class="kartu-beranda">
                <h3>✨ Siap Menjadi Lebih Paham tentang Median?</h3>

                <p>
                    Jangan hanya menghafal rumus. Cobalah memahami
                    mengapa median digunakan, bagaimana cara
                    menentukannya, dan apa arti hasilnya dalam
                    kehidupan sehari-hari.
                </p>

                <button onclick="tampilkanHalaman('materi')">
                    📚 Pelajari Materi Median
                </button>

                <button onclick="tampilkanHalaman('rmt')">
                    🧠 Mulai Aktivitas RMT
                </button>
            </div>

        </section>
    `;
}


// ==========================================
// MATERI PEMBELAJARAN MEDIAN
// ==========================================


else if (halaman === "materi") {

    konten.innerHTML = `
        <section class="halaman-materi">

            <h2>📚 Materi Pembelajaran Median</h2>

            <p>
                Selamat datang di materi pembelajaran median!
                Pada bagian ini, kamu akan belajar memahami
                nilai tengah suatu kumpulan data, menentukan
                median data ganjil dan genap, serta menggunakan
                median untuk menyelesaikan permasalahan sehari-hari.
            </p>

            <div class="kartu-materi">
                <h3>🎯 Tujuan Pembelajaran</h3>
                <p>Setelah mempelajari materi ini, kamu diharapkan mampu:</p>
                <ul>
                    <li>Menjelaskan pengertian median.</li>
                    <li>Mengurutkan sekumpulan data.</li>
                    <li>Menentukan median data ganjil.</li>
                    <li>Menentukan median data genap.</li>
                    <li>Menafsirkan median sesuai konteks permasalahan.</li>
                </ul>
            </div>

            <div class="kartu-materi">
                <h3>1. Apa Itu Median?</h3>

                <p>
                    Median adalah nilai tengah dari sekumpulan
                    data setelah data tersebut diurutkan dari
                    nilai terkecil ke terbesar atau sebaliknya.
                </p>

                <p>
                    Median termasuk salah satu ukuran pemusatan
                    data dalam statistika. Median membantu kita
                    mengetahui nilai yang berada di posisi tengah
                    suatu kumpulan data.
                </p>

                <h4>Contoh sederhana</h4>

                <p>
                    Perhatikan lima nilai berikut:
                </p>

                <p class="contoh-data">
                    60, 70, 75, 80, 90
                </p>

                <p>
                    Nilai yang berada tepat di tengah adalah 75.
                    Jadi, median dari data tersebut adalah 75.
                </p>

                <div class="kesimpulan-materi">
                    <strong>Ingat!</strong>
                    Median ditentukan berdasarkan posisi data,
                    bukan berdasarkan nilai yang paling sering muncul.
                </div>
            </div>

            <div class="kartu-materi">
                <h3>2. Mengapa Data Harus Diurutkan?</h3>

                <p>
                    Sebelum mencari median, kita harus menyusun
                    data terlebih dahulu. Jika data belum urut,
                    kita bisa keliru menentukan nilai tengahnya.
                </p>

                <h4>Perhatikan contoh berikut:</h4>

                <p><strong>Data awal:</strong></p>
                <p class="contoh-data">
                    80, 60, 90, 70, 75
                </p>

                <p><strong>Setelah diurutkan:</strong></p>
                <p class="contoh-data">
                    60, 70, 75, 80, 90
                </p>

                <p>
                    Setelah diurutkan, terlihat bahwa nilai
                    yang berada di tengah adalah 75.
                </p>

                <p class="kesimpulan-materi">
                    Jadi, median data tersebut adalah 75.
                    Mengurutkan data merupakan langkah penting
                    sebelum menentukan median.
                </p>
            </div>

            <div class="kartu-materi">
                <h3>3. Median pada Data Berjumlah Ganjil</h3>

                <p>
                    Data berjumlah ganjil adalah kumpulan data
                    yang banyak anggotanya tidak habis dibagi dua,
                    misalnya 3, 5, 7, atau 9 data.
                </p>

                <p>
                    Pada data ganjil, median merupakan satu nilai
                    yang tepat berada di tengah setelah data diurutkan.
                </p>

                <h4>Rumus menentukan posisi median:</h4>

                <p class="rumus-median">
                    Posisi median = (n + 1) / 2
                </p>

                <p><strong>Keterangan:</strong></p>
                <ul>
                    <li>n = banyaknya data.</li>
                    <li>Posisi median = urutan data yang berada di tengah.</li>
                </ul>

                <h4>Contoh soal</h4>

                <p>
                    Nilai ulangan lima siswa adalah:
                </p>

                <p class="contoh-data">
                    80, 65, 90, 70, 75
                </p>

                <p><strong>Langkah 1: Urutkan data.</strong></p>
                <p class="contoh-data">
                    65, 70, 75, 80, 90
                </p>

                <p><strong>Langkah 2: Hitung banyak data.</strong></p>
                <p>n = 5</p>

                <p><strong>Langkah 3: Tentukan posisi median.</strong></p>
                <p>
                    Posisi median = (5 + 1) / 2 = 3
                </p>

                <p><strong>Langkah 4: Ambil nilai pada posisi ketiga.</strong></p>
                <p>
                    Data ke-3 adalah 75.
                </p>

                <div class="kesimpulan-materi">
                    Jadi, median nilai ulangan kelima siswa
                    tersebut adalah <strong>75</strong>.
                </div>

                <h4>Ilustrasi posisi median</h4>

                <div class="contoh-data">
                    <p>65 &nbsp; | &nbsp; 70 &nbsp; | &nbsp;
                    <strong>75</strong> &nbsp; | &nbsp; 80
                    &nbsp; | &nbsp; 90</p>
                    <p>Nilai yang dicetak tebal merupakan median.</p>
                </div>
            </div>

            <div class="kartu-materi">
                <h3>4. Median pada Data Berjumlah Genap</h3>

                <p>
                    Data berjumlah genap adalah kumpulan data
                    yang banyak anggotanya habis dibagi dua,
                    misalnya 4, 6, 8, atau 10 data.
                </p>

                <p>
                    Berbeda dengan data ganjil, data genap
                    memiliki dua nilai yang berada di tengah.
                    Median diperoleh dengan menghitung rata-rata
                    dari kedua nilai tersebut.
                </p>

                <h4>Rumus median data genap:</h4>

                <p class="rumus-median">
                    Median = (nilai tengah pertama + nilai tengah kedua) / 2
                </p>

                <h4>Contoh soal</h4>

                <p>
                    Waktu belajar empat siswa dalam satu hari
                    adalah 2, 4, 3, dan 5 jam.
                </p>

                <p><strong>Langkah 1: Urutkan data.</strong></p>
                <p class="contoh-data">
                    2, 3, 4, 5
                </p>

                <p><strong>Langkah 2: Hitung banyak data.</strong></p>
                <p>n = 4</p>

                <p><strong>Langkah 3: Tentukan dua nilai tengah.</strong></p>
                <p>
                    Dua nilai tengah adalah 3 dan 4.
                </p>

                <p><strong>Langkah 4: Hitung rata-rata kedua nilai.</strong></p>
                <p>
                    Median = (3 + 4) / 2
                </p>
                <p>
                    Median = 7 / 2 = 3,5
                </p>

                <div class="kesimpulan-materi">
                    Jadi, median waktu belajar keempat siswa
                    tersebut adalah <strong>3,5 jam</strong>.
                </div>

                <h4>Ilustrasi dua nilai tengah</h4>

                <div class="contoh-data">
                    <p>
                        2 &nbsp; | &nbsp; <strong>3</strong>
                        &nbsp; | &nbsp; <strong>4</strong>
                        &nbsp; | &nbsp; 5
                    </p>
                    <p>
                        Median diperoleh dari rata-rata 3 dan 4.
                    </p>
                </div>
            </div>

            <div class="kartu-materi">
                <h3>5. Perbedaan Mean, Median, dan Modus</h3>

                <p>
                    Dalam statistika, terdapat tiga ukuran
                    pemusatan data yang sering digunakan,
                    yaitu mean, median, dan modus.
                </p>

                <ul>
                    <li>
                        <strong>Mean (rata-rata):</strong>
                        diperoleh dengan menjumlahkan seluruh
                        data kemudian membaginya dengan banyak data.
                    </li>
                    <li>
                        <strong>Median:</strong>
                        nilai tengah setelah data diurutkan.
                    </li>
                    <li>
                        <strong>Modus:</strong>
                        nilai yang paling sering muncul.
                    </li>
                </ul>

                <h4>Contoh perbandingan</h4>

                <p class="contoh-data">
                    2, 3, 3, 4, 18
                </p>

                <p>
                    Mean = (2 + 3 + 3 + 4 + 18) / 5
                    = 30 / 5 = 6
                </p>

                <p>Median = 3</p>

                <p>Modus = 3</p>

                <p>
                    Perhatikan bahwa nilai 18 cukup jauh
                    dari nilai lainnya sehingga membuat
                    rata-rata menjadi 6.
                </p>

                <p>
                    Median tetap menunjukkan nilai tengah,
                    yaitu 3. Dalam situasi ini, median dapat
                    memberikan gambaran yang lebih sesuai
                    tentang nilai yang umum ditemukan.
                </p>
            </div>

            <div class="kartu-materi">
                <h3>6. Penerapan Median dalam Kehidupan Sehari-hari</h3>

                <p>
                    Median tidak hanya digunakan dalam pelajaran
                    matematika. Kita dapat menemukannya dalam
                    berbagai kegiatan sehari-hari.
                </p>

                <h4>📚 Bidang Pendidikan</h4>
                <p>
                    Guru dapat menggunakan median untuk mengetahui
                    nilai tengah hasil ulangan siswa.
                </p>

                <h4>📖 Bidang Perpustakaan</h4>
                <p>
                    Median dapat digunakan untuk mengetahui
                    jumlah pengunjung yang berada di posisi tengah
                    dari data kunjungan harian.
                </p>

                <h4>🌱 Bidang Lingkungan</h4>
                <p>
                    Median dapat membantu mengetahui tinggi tengah
                    tanaman dari sejumlah tanaman yang diukur.
                </p>

                <h4>⏰ Kegiatan Sehari-hari</h4>
                <p>
                    Median dapat digunakan untuk memahami waktu
                    belajar atau waktu perjalanan sekelompok orang.
                </p>
            </div>

            <div class="kartu-materi">
                <h3>7. Kesalahan yang Harus Dihindari</h3>

                <ul>
                    <li>
                        Tidak mengurutkan data sebelum mencari median.
                    </li>
                    <li>
                        Salah menghitung banyaknya data.
                    </li>
                    <li>
                        Mengambil satu nilai tengah pada data genap.
                    </li>
                    <li>
                        Tidak menghitung rata-rata dua nilai tengah
                        pada data genap.
                    </li>
                    <li>
                        Tidak menuliskan satuan atau makna median
                        sesuai konteks soal.
                    </li>
                </ul>

                <p>
                    Oleh karena itu, periksa kembali setiap langkah
                    penyelesaian agar hasil yang diperoleh benar.
                </p>
            </div>

            <div class="kartu-materi">
                <h3>🌟 Coba Uji Pemahamanmu!</h3>

                <p>
                    Perhatikan data jumlah buku yang dibaca
                    lima siswa berikut:
                </p>

                <p class="contoh-data">
                    4, 7, 5, 9, 6
                </p>

                <p>
                    Menurutmu, berapakah median dari data tersebut?
                </p>

                <input
                    type="number"
                    id="jawabanCekMedian"
                    placeholder="Masukkan nilai median"
                >

                <button onclick="periksaPemahamanMedian()">
                    Periksa Jawaban
                </button>

                <p id="hasilCekMedian"></p>
            </div>

<div class="kartu-materi">
    <h3>🧩 Tantangan Median Data Genap</h3>

    <p>
        Empat siswa mencatat waktu belajar mereka:
    </p>

    <p class="contoh-data">
        2, 4, 3, 5 jam
    </p>

    <p>
        Setelah data diurutkan, tentukan dua nilai yang
        berada di tengah, kemudian hitung mediannya.
    </p>

    <label for="jawabanCekMedianGenap">
        Berapakah median dari data tersebut?
    </label>

    <input
        type="number"
        step="any"
        id="jawabanCekMedianGenap"
        placeholder="Masukkan median"
    >

    <button onclick="periksaPemahamanMedianGenap()">
        Periksa Jawaban
    </button>

    <p id="hasilCekMedianGenap"></p>
</div>

            <div class="kartu-materi">
                <h3>🌷 Rangkuman Materi</h3>

                <p>
                    Median adalah nilai tengah dari sekumpulan
                    data yang telah diurutkan.
                </p>

                <ul>
                    <li>
                        Data ganjil: ambil satu nilai yang
                        berada tepat di tengah.
                    </li>
                    <li>
                        Data genap: hitung rata-rata dua nilai
                        yang berada di tengah.
                    </li>
                    <li>
                        Urutkan data sebelum menentukan median.
                    </li>
                    <li>
                        Tafsirkan hasil median berdasarkan
                        permasalahan yang diberikan.
                    </li>
                </ul>

                <p>
                    Memahami median bukan hanya tentang
                    mendapatkan jawaban, tetapi juga memahami
                    proses dan makna dari hasil perhitungan.
                </p>
            </div>

            <button onclick="tampilkanHalaman('rmt')">
                Lanjut ke Aktivitas RMT →
            </button>

        </section>
    `;
}

    // AKTIVITAS RMT
    else if (halaman === "rmt") {

        tampilkanAktivitasRMT();

    }

   
   
    // ==========================================
    // LATIHAN LITERASI MATEMATIKA
    // ==========================================
    else if (halaman === "latihan") {

        konten.innerHTML = `
            <section class="halaman-latihan">

                <h2>✏️ Latihan Literasi Matematika</h2>

                <p>
                    Ayo uji kemampuanmu dalam memahami dan menggunakan
                    konsep median melalui lima permasalahan sehari-hari!
                </p>

                <div class="kartu-latihan">
                    <h3>🌷 Petunjuk Pengerjaan</h3>
                    <ul>
                        <li>Bacalah setiap soal dengan teliti.</li>
                        <li>Urutkan data sebelum menentukan median.</li>
                        <li>Tuliskan langkah-langkah perhitunganmu.</li>
                        <li>Berikan alasan dan kesimpulan sesuai soal.</li>
                    </ul>
                    <p><strong>Skor maksimal: 30 poin.</strong></p>
                </div>

                <div class="kartu-latihan">
                    <h3>Soal 1 – Memilih Rute Sepeda</h3>
                    <p>
                        Rudi mencatat waktu perjalanan bersepeda
                        menuju sekolah selama 7 hari.
                    </p>
                    <p><strong>Rute A:</strong> 25, 18, 20, 45, 19, 22, 21 menit.</p>
                    <p><strong>Rute B:</strong> 24, 23, 22, 25, 23, 24, 22 menit.</p>
                    <p>
                        Rudi ingin memilih rute dengan waktu perjalanan
                        yang paling biasa terjadi dan tidak terlalu
                        dipengaruhi oleh satu hari ketika jalan sangat macet.
                        Temannya menyarankan Rute B karena rata-rata
                        waktunya lebih kecil.
                    </p>
                    <p>
                        Menurutmu, rute mana yang sebaiknya dipilih Rudi
                        jika dibandingkan menggunakan median?
                        Jelaskan alasanmu!
                    </p>
                    <textarea id="jawaban1" rows="5" oninput="simpanOtomatisLiterasi()"
                        placeholder="Tuliskan urutan data, perhitungan median, dan alasanmu..."></textarea>
                </div>

                <div class="kartu-latihan">
                    <h3>Soal 2 – Target Median Nilai Tugas</h3>
                    <p>
                        Dimas mendapatkan lima nilai tugas, yaitu
                        60, 70, 80, 90, dan 100.
                    </p>
                    <p>
                        Dimas akan mengerjakan satu tugas lagi.
                        Ia ingin median dari keenam nilainya menjadi 76.
                        Nilai tugas keenam berada di antara 70 dan 80.
                    </p>
                    <p>
                        Jika nilai tugas keenam adalah x, buatlah
                        persamaan matematika untuk mencari nilai x.
                        Kemudian, tentukan nilai yang harus diperoleh Dimas!
                    </p>
                    <textarea id="jawaban2" rows="5" oninput="simpanOtomatisLiterasi()"
                        placeholder="Tuliskan model matematika dan langkah penyelesaianmu..."></textarea>
                </div>

                <div class="kartu-latihan">
                    <h3>Soal 3 – Pengunjung Perpustakaan</h3>
                    <p>
                        Perpustakaan sekolah mencatat jumlah pengunjung
                        selama delapan hari berturut-turut.
                    </p>
                    <p>
                        Data jumlah pengunjung adalah:
                        34, 28, 41, 25, 37, 30, 45, dan 32 orang.
                    </p>
                    <p>
                        Berapakah median jumlah pengunjung perpustakaan?
                        Tunjukkan langkah-langkahmu mulai dari mengurutkan
                        data sampai mendapatkan nilai median!
                    </p>
                    <textarea id="jawaban3" rows="5" oninput="simpanOtomatisLiterasi()"
                        placeholder="Tuliskan urutan data dan perhitungan median..."></textarea>
                </div>

                <div class="kartu-latihan">
                    <h3>Soal 4 – Waktu Belajar Mandiri</h3>
                    <p>
                        Lima siswa mencatat waktu belajar mandiri
                        selama satu minggu. Data waktu belajar mereka
                        adalah 2, 3, 3, 4, dan 18 jam.
                    </p>
                    <p>
                        Seorang siswa menghitung rata-rata waktu belajar
                        sebesar 6 jam. Ia kemudian menyimpulkan bahwa
                        sebagian besar temannya belajar sekitar 6 jam.
                    </p>
                    <p>
                        Apakah kamu setuju dengan kesimpulan tersebut?
                        Tentukan median data, jelaskan artinya,
                        dan pilih apakah mean atau median yang lebih
                        tepat untuk menggambarkan waktu belajar
                        sebagian besar siswa. Jelaskan alasanmu!
                    </p>
                    <textarea id="jawaban4" rows="5" oninput="simpanOtomatisLiterasi()"
                        placeholder="Tuliskan perhitungan, penjelasan, dan kesimpulanmu..."></textarea>
                </div>

                <div class="kartu-latihan">
                    <h3>Soal 5 – Tinggi Tanaman</h3>
                    <p>
                        Seorang siswa mengukur tinggi sembilan tanaman
                        cabai. Hasil pengukurannya adalah:
                        12, 15, 9, 20, 14, 11, 18, 13, dan 16 cm.
                    </p>
                    <p>
                        Urutkan data tersebut dari yang terkecil
                        hingga terbesar. Sajikan dalam tabel,
                        tentukan median tinggi tanaman, lalu tuliskan
                        kesimpulanmu dalam kalimat lengkap!
                    </p>
                    <textarea id="jawaban5" rows="5" oninput="simpanOtomatisLiterasi()"
                        placeholder="Buat tabel, hitung median, dan tuliskan kesimpulan..."></textarea>
                </div>

                <div class="kartu-latihan">
                    <h3>🌟 Periksa Kembali Jawabanmu</h3>
                    <p>
                        Pastikan kamu sudah mengerjakan semua soal
                        dan menuliskan langkah penyelesaian dengan jelas.
                    </p>

                    <button onclick="simpanJawabanLiterasi()">
                        💾 Simpan Jawaban
                    </button>
<button onclick="hapusJawabanLiterasi()">
    Hapus Jawaban
</button>
                    <p id="pesanSimpanLiterasi"></p>
                </div>

            </section>
        `;
        muatJawabanLiterasi();
    }
    // ==========================================
    // LATIHAN SOAL MEDIAN
    // ==========================================
    else if (halaman === "soal") {

        konten.innerHTML = `
            <section class="halaman-latihan">

                <h2>📝 Latihan Soal Median</h2>

                <p>
                    Yuk, berlatih menentukan median!
                    Kerjakan soal berikut dengan teliti.
                </p>

                <div class="kartu-latihan">
                    <h3>🌷 Petunjuk Pengerjaan</h3>
                    <ul>
                        <li>Perhatikan semua angka dalam soal.</li>
                        <li>Urutkan data dari yang terkecil.</li>
                        <li>Tentukan nilai tengah data.</li>
                        <li>Masukkan jawabanmu pada kotak yang tersedia.</li>
                    </ul>
                </div>

                <div class="kartu-latihan">
                    <h3>Soal 1 – Median Data Ganjil</h3>
                    <p>
                        Tentukan median dari data berikut:
                    </p>
                    <p><strong>25, 18, 20, 45, 19, 22, 21</strong></p>
                   <input type="number" id="latihan1" oninput="simpanOtomatisLatihanSoal()">
                        placeholder="Masukkan jawaban">
                </div>

                <div class="kartu-latihan">
                    <h3>Soal 2 – Menentukan Nilai yang Belum Diketahui</h3>
                    <p>
                        Diketahui persamaan berikut:
                    </p>
                    <p><strong>(x + 80) ÷ 2 = 76</strong></p>
                    <p>Tentukan nilai x!</p>
                   <input type="number" id="latihan2" oninput="simpanOtomatisLatihanSoal()">
                        placeholder="Masukkan jawaban">
                </div>

                <div class="kartu-latihan">
                    <h3>Soal 3 – Median Data Genap</h3>
                    <p>
                        Tentukan median dari data berikut:
                    </p>
                    <p><strong>34, 28, 41, 25, 37, 30, 45, 32</strong></p>
                    <input type="number" id="latihan3" oninput="simpanOtomatisLatihanSoal()">
                        placeholder="Masukkan jawaban">
                </div>

                <div class="kartu-latihan">
                    <h3>Soal 4 – Median dan Nilai Ekstrem</h3>
                    <p>
                        Tentukan median dari data berikut:
                    </p>
                    <p><strong>2, 3, 3, 4, 18</strong></p>
                    <input type="number" id="latihan4" oninput="simpanOtomatisLatihanSoal()">
                        placeholder="Masukkan jawaban">
                </div>

                <div class="kartu-latihan">
                    <h3>Soal 5 – Median Data Ganjil</h3>
                    <p>
                        Tentukan median dari data berikut:
                    </p>
                    <p><strong>12, 15, 9, 20, 14, 11, 18, 13, 16</strong></p>
                    <input type="number" id="latihan5" oninput="simpanOtomatisLatihanSoal()">
                        placeholder="Masukkan jawaban">
                </div>

               <div class="kartu-latihan">

    <button onclick="periksaLatihanSoal()">
        Periksa Jawaban
    </button>

    <button onclick="hapusHasilLatihanSoal()">
        🗑️ Hapus Hasil Latihan
    </button>

    <div id="hasilLatihanSoal"></div>

</div>

            </section>
        `;

        muatHasilLatihanSoal();
        muatJawabanOtomatisLatihanSoal();

    }

   
    // AI TUTOR
    else if (halaman === "ai") {

        konten.innerHTML = `
            <section class="halaman-ai">

                <h2>🤖 AI Tutor Median</h2>

                <p>
                    Halo! Selamat datang di AI Tutor Median.
                    Aku siap membantumu memahami materi median.
                </p>

                <div class="kartu-latihan">
                    <h3>🌷 Apa yang ingin kamu pelajari?</h3>

                    <p>
                        Kamu bisa menanyakan pengertian median,
                        cara menghitung median, contoh soal,
                        atau meminta petunjuk penyelesaian.
                    </p>

                    <div id="percakapanTutor"
                         style="min-height:180px; padding:15px;
                         border:1px solid #ddd; border-radius:12px;
                         margin:15px 0;">

                        <p>
                            <strong>🤖 AI Tutor:</strong>
                        </p>

                        <p>
                            Hai! Yuk belajar median bersama.
                            Coba tanyakan sesuatu tentang median.
                            Aku akan membantu menjelaskannya.
                        </p>

                    </div>

                    <label for="pertanyaanTutor">
                        <strong>Tuliskan pertanyaanmu:</strong>
                    </label>

                    <textarea
                        id="pertanyaanTutor"
                        rows="3"
                        placeholder="Contoh: Bagaimana cara mencari median data ganjil?"
                    ></textarea>

                    <button
                        type="button"
                        onclick="kirimPertanyaanTutor()">
                        Kirim Pertanyaan
                    </button>

                    <h4>💡 Contoh pertanyaan:</h4>

                    <button onclick="tanyaContohTutor('Apa itu median?')">
                        Apa itu median?
                    </button>

                    <button onclick="tanyaContohTutor('Bagaimana cara mencari median data ganjil?')">
                        Median data ganjil
                    </button>

                    <button onclick="tanyaContohTutor('Bagaimana cara mencari median data genap?')">
                        Median data genap
                    </button>

                    <button onclick="tanyaContohTutor('Berikan contoh soal median')">
                        Contoh soal median
                    </button>

                </div>

            </section>
        `;
    }

// HASIL DAN REFLEKSI
else if (halaman === "hasil") {

    konten.innerHTML = `
        <section class="halaman-hasil">

            <h2>📊 Hasil dan Refleksi Pembelajaran</h2>

            <p>
                Selamat datang di halaman hasil pembelajaran!
                Di sini kamu dapat melihat perkembangan
                hasil belajar dan mengevaluasi pemahamanmu
                tentang materi median.
            </p>

            <div class="kartu-hasil">
                <h3>🧠 Hasil Aktivitas RMT</h3>
                <p>
                    Lihat kembali jawaban dan proses berpikirmu
                    melalui tahap Input, Elaboration, dan Output.
                </p>
                <p id="hasilRMT">
                    Hasil aktivitas RMT akan ditampilkan di sini.
                </p>
            </div>

            <div class="kartu-hasil">
                <h3>✍️ Hasil Latihan Literasi Matematika</h3>
                <p id="hasilLiterasi">
                    Hasil latihan literasi matematika akan ditampilkan di sini.
                </p>
            </div>

            <div class="kartu-hasil">
                <h3>📝 Hasil Latihan Soal</h3>
                <p id="hasilSoal">
                    Nilai latihan soal akan ditampilkan di sini.
                </p>
            </div>

            <div class="kartu-hasil">
                <h3>🌷 Refleksi Pembelajaran</h3>

                <p>
                    Setelah mempelajari materi median,
                    jawablah pertanyaan refleksi berikut.
                </p>

                <label for="refleksiBelajar">
                    Apa hal baru yang kamu pelajari tentang median?
                </label>

                <textarea
                    id="refleksiBelajar"
                    placeholder="Tuliskan refleksimu di sini..."
                ></textarea>

                <label for="refleksiKesulitan">
                    Bagian mana yang masih sulit kamu pahami?
                </label>

                <textarea
                    id="refleksiKesulitan"
                    placeholder="Tuliskan kesulitanmu di sini..."
                ></textarea>

                <button onclick="simpanRefleksi()">
                    💾 Simpan Refleksi
                </button>

                <p id="pesanRefleksi"></p>
            </div>

        </section>
    `;

        muatRefleksi();

        const dataSoalTersimpan = localStorage.getItem("hasilLatihanSoalMedian");
    const ringkasanSoal = document.getElementById("hasilSoal");

    if (dataSoalTersimpan && ringkasanSoal) {
        
        try {
            const dataSoal = JSON.parse(dataSoalTersimpan);

            ringkasanSoal.innerHTML = `
                <strong>Jawaban benar:</strong> ${dataSoal.benar} dari 5 soal
                <br>
                <strong>Nilai:</strong> ${dataSoal.nilai}
                <br>
                <strong>Terakhir dikerjakan:</strong> ${dataSoal.tanggal}
            `;
        } catch (error) {
            ringkasanSoal.textContent = "Hasil latihan belum dapat ditampilkan.";
        }
    } else if (ringkasanSoal) {
        ringkasanSoal.textContent = "Kamu belum mengerjakan latihan soal.";
    }    const dataLiterasiTersimpan = localStorage.getItem("jawabanLiterasiMedian");
    const ringkasanLiterasi = document.getElementById("hasilLiterasi");

    if (dataLiterasiTersimpan && ringkasanLiterasi) {
        try {
            const dataLiterasi = JSON.parse(dataLiterasiTersimpan);
            const jumlahTerjawab = Object.values(dataLiterasi)
                .filter(jawaban => jawaban.trim() !== "").length;

            ringkasanLiterasi.innerHTML = `
                <strong>Jawaban terisi:</strong> ${jumlahTerjawab} dari 5 soal
                <br>
                <strong>Status:</strong> ${jumlahTerjawab === 5 ? "Semua soal sudah dijawab 🎉" : "Masih ada soal yang belum dijawab."}
            `;
        } catch (error) {
            ringkasanLiterasi.textContent = "Hasil latihan literasi belum dapat ditampilkan.";
        }
    } else if (ringkasanLiterasi) {
        ringkasanLiterasi.textContent = "Kamu belum mengisi latihan literasi matematika.";
    }
    const dataRMtersimpan = localStorage.getItem("jawabanAktivitasRMT");
const ringkasanRMT = document.getElementById("hasilRMT");

if (dataRMtersimpan && ringkasanRMT) {
    try {
        const dataRMT = JSON.parse(dataRMtersimpan);
        const daftarJawabanRMT = Object.values(dataRMT);

        const jumlahTerjawabRMT = daftarJawabanRMT.filter(
            jawaban => jawaban.trim() !== ""
        ).length;

        ringkasanRMT.innerHTML = `
            <strong>Jawaban terisi:</strong> ${jumlahTerjawabRMT} dari 15 pertanyaan
            <br>
            <strong>Status:</strong> ${jumlahTerjawabRMT === 15
                ? "Semua tahapan RMT sudah selesai 🎉"
                : "Aktivitas RMT belum lengkap."}
        `;
    } catch (error) {
        ringkasanRMT.textContent = "Hasil aktivitas RMT belum dapat ditampilkan.";
    }
} else if (ringkasanRMT) {
    ringkasanRMT.textContent = "Kamu belum menyimpan jawaban aktivitas RMT.";
}
}

    // HALAMAN TIDAK DITEMUKAN
    else {

        konten.innerHTML = `
            <section>
                <h2>Halaman Tidak Ditemukan</h2>
                <p>Silakan pilih menu yang tersedia.</p>
            </section>
        `;
    }

    // KEMBALI KE BAGIAN ATAS KONTEN
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// ==========================================
// HALAMAN AWAL APLIKASI
// ==========================================

// ==========================================
// FUNGSI SIMPAN JAWABAN LITERASI MATEMATIKA
// ==========================================

function simpanJawabanLiterasi() {

    const jawaban = {
        soal1: document.getElementById("jawaban1").value.trim(),
        soal2: document.getElementById("jawaban2").value.trim(),
        soal3: document.getElementById("jawaban3").value.trim(),
        soal4: document.getElementById("jawaban4").value.trim(),
        soal5: document.getElementById("jawaban5").value.trim()
    };

    const belumDiisi = Object.values(jawaban).filter(
        nilai => nilai === ""
    ).length;

    const pesan = document.getElementById("pesanSimpanLiterasi");

    if (belumDiisi > 0) {

        pesan.textContent =
            `Masih ada ${belumDiisi} soal yang belum dijawab. Lengkapi semua soal terlebih dahulu, ya! 🌷`;

        return;
    }

    try {

        localStorage.setItem(
            "jawabanLiterasiMedian",
            JSON.stringify(jawaban)
        );

        pesan.textContent =
            "🎉 Semua jawaban berhasil disimpan!";

    } catch (error) {

        pesan.textContent =
            "Maaf, jawaban belum dapat disimpan.";

    }

}


function muatJawabanLiterasi() {

    const dataTersimpan = localStorage.getItem(
        "jawabanLiterasiMedian"
    );

    if (!dataTersimpan) {
        return;
    }

    try {

        const jawaban = JSON.parse(dataTersimpan);

        document.getElementById("jawaban1").value = jawaban.soal1 || "";
        document.getElementById("jawaban2").value = jawaban.soal2 || "";
        document.getElementById("jawaban3").value = jawaban.soal3 || "";
        document.getElementById("jawaban4").value = jawaban.soal4 || "";
        document.getElementById("jawaban5").value = jawaban.soal5 || "";

        document.getElementById("pesanSimpanLiterasi").textContent =
            "Jawaban sebelumnya berhasil dimuat kembali! 🌷";

    } catch (error) {

        console.error("Gagal memuat jawaban literasi:", error);

    }

}


// ==========================================
// FUNGSI HAPUS JAWABAN LATIHAN LITERASI
// ==========================================

function hapusJawabanLiterasi() {

    const konfirmasi = confirm(
        "Apakah kamu yakin ingin menghapus semua jawaban?"
    );

    if (!konfirmasi) {
        return;
    }

    localStorage.removeItem("jawabanLiterasiMedian");

    for (let i = 1; i <= 5; i++) {
        document.getElementById(`jawaban${i}`).value = "";
    }

    document.getElementById("pesanSimpanLiterasi").textContent =
        "Semua jawaban berhasil dihapus. Kamu bisa mengerjakan kembali! 🌷";

}
// ==========================================
// FUNGSI SIMPAN OTOMATIS JAWABAN LITERASI
// ==========================================

function simpanOtomatisLiterasi() {
    const jawaban = {
        soal1: document.getElementById("jawaban1").value.trim(),
        soal2: document.getElementById("jawaban2").value.trim(),
        soal3: document.getElementById("jawaban3").value.trim(),
        soal4: document.getElementById("jawaban4").value.trim(),
        soal5: document.getElementById("jawaban5").value.trim()
    };

    try {

        localStorage.setItem(
            "jawabanLiterasiMedian",
            JSON.stringify(jawaban)
        );

       const pesan = document.getElementById("pesanSimpanLiterasi");

pesan.textContent = "💾 Jawaban berhasil tersimpan otomatis!";

    } catch (error) {

        document.getElementById("pesanSimpanLiterasi").textContent =
            "Maaf, jawaban belum dapat disimpan otomatis.";

    }

}

// ==========================================
// FUNGSI PERIKSA LATIHAN SOAL MEDIAN
// ==========================================


function periksaLatihanSoal() {

    const kunciJawaban = [21, 72, 33, 3, 14];

    let benar = 0;
    let hasil = "";

    for (let i = 1; i <= 5; i++) {

        const input = document.getElementById("latihan" + i);
        const jawaban = Number(input.value);

        if (input.value.trim() === "") {

            hasil += `<p>Soal ${i}: Belum dijawab.</p>`;

        } else if (jawaban === kunciJawaban[i - 1]) {

            benar++;

            hasil += `<p>Soal ${i}: ✅ Benar!</p>`;

        } else {

            hasil += `
                <p>Soal ${i}: ❌ Belum tepat.
                Jawaban yang benar adalah ${kunciJawaban[i - 1]}.</p>
            `;
        }
    }

    const nilai = benar * 20;

    const dataHasil = {
    benar: benar,
    nilai: nilai,
    tanggal: new Date().toLocaleString("id-ID"),
    jawaban: []
};

for (let i = 1; i <= 5; i++) {
    dataHasil.jawaban.push(
        document.getElementById("latihan" + i).value
    );
}

    try {

        localStorage.setItem(
            "hasilLatihanSoalMedian",
            JSON.stringify(dataHasil)
        );

    } catch (error) {

        console.error("Gagal menyimpan hasil latihan:", error);

    }

    document.getElementById("hasilLatihanSoal").innerHTML = `
        <h3>🌷 Hasil Latihanmu</h3>
        <p>Jawaban benar: ${benar} dari 5 soal</p>
        <p>Nilai: ${nilai}</p>
        ${hasil}
        <p>
            ${
                benar === 5
                ? "Hebat! Semua jawabanmu benar! 🎉"
                : "Tetap semangat belajar median, ya!"
            }
        </p>
    `;
}

function muatHasilLatihanSoal() {

    const dataTersimpan = localStorage.getItem(
        "hasilLatihanSoalMedian"
    );

    if (!dataTersimpan) {
        return;
    }

    try {

        const data = JSON.parse(dataTersimpan);
for (let i = 1; i <= 5; i++) {

    document.getElementById("latihan" + i).value =
        data.jawaban && data.jawaban[i - 1]
            ? data.jawaban[i - 1]
            : "";
           
}
        document.getElementById("hasilLatihanSoal").innerHTML = `
            <h3>🌷 Hasil Latihan Sebelumnya</h3>
            <p>Jawaban benar: ${data.benar} dari 5 soal</p>
            <p>Nilai: ${data.nilai}</p>
            <p>Terakhir dikerjakan: ${data.tanggal}</p>
            <p>💾 Hasil latihan berhasil dimuat kembali!</p>
        `;

    } catch (error) {

        console.error("Gagal memuat hasil latihan:", error);

    }
}
function hapusHasilLatihanSoal() {

    const konfirmasi = confirm(
        "Apakah kamu yakin ingin menghapus hasil latihan dan semua jawaban?"
    );

    if (!konfirmasi) {
        return;
    }

    localStorage.removeItem("hasilLatihanSoalMedian");
    localStorage.removeItem("jawabanOtomatisLatihanSoal");

    for (let i = 1; i <= 5; i++) {
        document.getElementById("latihan" + i).value = "";
    }

    document.getElementById("hasilLatihanSoal").innerHTML = `
        <p>🗑️ Hasil latihan dan semua jawaban berhasil dihapus.</p>
        <p>Silakan kerjakan kembali dari awal, ya!</p>
    `;
}
function simpanOtomatisLatihanSoal() {

    const jawaban = [];

    for (let i = 1; i <= 5; i++) {
        jawaban.push(
            document.getElementById("latihan" + i).value
        );
    }

    localStorage.setItem(
        "jawabanOtomatisLatihanSoal",
        JSON.stringify(jawaban)
    );

}
function muatJawabanOtomatisLatihanSoal() {

    const dataTersimpan = localStorage.getItem(
        "jawabanOtomatisLatihanSoal"
    );

    if (!dataTersimpan) {
        return;
    }

    try {
        const jawaban = JSON.parse(dataTersimpan);

        for (let i = 1; i <= 5; i++) {
            document.getElementById("latihan" + i).value =
                jawaban[i - 1] || "";
        }

    } catch (error) {
        console.error("Gagal memuat jawaban otomatis:", error);
    }

}

// ==========================================
// FUNGSI AI TUTOR MEDIAN
// ==========================================


// ==========================================
// FUNGSI AI TUTOR GEMINI
// ==========================================


// ==========================================
// FUNGSI AI TUTOR MEDIAN - VERSI PERBAIKAN
// ==========================================
let riwayatPercakapan = [];
async function kirimPertanyaanTutor() {

    const input = document.getElementById("pertanyaanTutor");
    const percakapan = document.getElementById("percakapanTutor");

    const pertanyaan = input.value.trim();

    if (!pertanyaan) {
        alert("Silakan tuliskan pertanyaan terlebih dahulu!");
        return;
    }

    // Tampilkan pertanyaan siswa
    const pesanPengguna = document.createElement("div");
    const judulPengguna = document.createElement("strong");
    judulPengguna.textContent = "👩‍🎓 Kamu:";

    const isiPengguna = document.createElement("p");
    isiPengguna.textContent = pertanyaan;

    pesanPengguna.append(judulPengguna, isiPengguna);
    percakapan.appendChild(pesanPengguna);

    // Tampilkan proses berpikir AI
    const pesanTutor = document.createElement("div");
    const judulTutor = document.createElement("strong");
    judulTutor.textContent = "🤖 AI Tutor:";

    const isiTutor = document.createElement("p");
    isiTutor.textContent = "Sedang berpikir... 🌷";

    pesanTutor.append(judulTutor, isiTutor);
    percakapan.appendChild(pesanTutor);

    input.value = "";
    percakapan.scrollTop = percakapan.scrollHeight;

    try {

        // Gunakan API Key BARU yang sudah dibuat ulang.
        // Jangan gunakan kembali API Key yang tadi dibagikan.
    const APP_SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbwe1JbBA3XW7dnTioNUh7W5M4I1-_2OeXH6yr1sgUDoru3bjUTvMK3Gnv7PM_BzHamg4w/exec";
riwayatPercakapan.push({
    role: "user",
    parts: [{
        text: pertanyaan
    }]
});
        const respons = await fetch(APP_SCRIPT_URL, {
            method: "POST",
headers: {
    "Content-Type": "text/plain;charset=utf-8"
},

            body: JSON.stringify({
systemInstruction: {
    parts: [{
        text: `
Kamu adalah AI Tutor Median dalam media pembelajaran Belajar Median.
Kamu bertugas membimbing siswa SMP memahami konsep median dengan ramah, sabar, interaktif, dan bertahap.

ATURAN UTAMA:
1. Selalu pahami seluruh riwayat percakapan sebelum menjawab.
2. Jangan mengulang salam atau memperkenalkan diri setiap kali siswa mengirim pesan.Jangan mengucapkan salam seperti "Halo", "Hai", atau "Selamat datang" ketika percakapan sudah dimulai. Langsung tanggapi pertanyaan atau jawaban siswa sesuai konteks percakapan.
3. Jangan menganggap setiap pesan siswa sebagai pertanyaan baru.
4. Ikuti tahapan penyelesaian soal yang sedang berlangsung.
5. Berikan satu pertanyaan atau satu tahapan pengerjaan dalam satu waktu.
6. Gunakan bahasa Indonesia yang sederhana dan mudah dipahami siswa SMP.
7. Jangan langsung memberikan seluruh jawaban jika siswa meminta bimbingan langkah demi langkah.
8. Berikan apresiasi secara wajar ketika siswa menjawab dengan benar.
9. Jika jawaban siswa salah, berikan koreksi dengan ramah dan jelaskan letak kesalahannya.
10. Jangan membuat contoh soal baru sebelum soal yang sedang dibahas selesai.

MATERI MEDIAN:
1. Median adalah nilai tengah dari data yang sudah diurutkan dari terkecil hingga terbesar.
2. Untuk data ganjil, median adalah satu nilai yang berada tepat di tengah.
3. Untuk data genap, median diperoleh dengan menjumlahkan dua nilai tengah kemudian membaginya dengan 2.
4. Selalu pastikan data sudah diurutkan sebelum menentukan median.
5. Hitung jumlah data dengan teliti.

RUMUS MEDIAN:
Data ganjil:
Me = x_(n+1)/2

Data genap:
Me = (x_(n/2) + x_(n/2+1))/2

ATURAN SAAT MENYELESAIKAN SOAL:
1. Bantu siswa mengurutkan data.
2. Bantu siswa menghitung jumlah data (n).
3. Tentukan apakah jumlah data ganjil atau genap.
4. Bantu siswa menemukan nilai tengah.
5. Jika data genap, bimbing siswa menghitung rata-rata dua nilai tengah.
6. Setelah siswa berhasil, tampilkan rumus yang sesuai.
7. Tampilkan substitusi angka ke dalam rumus.
8. Tampilkan perhitungan secara bertahap.
9. Berikan kesimpulan dengan menyebutkan nilai median.

CONTOH:
Jika data adalah 8, 3, 6, 2, 9, 5:
- Urutkan menjadi 2, 3, 5, 6, 8, 9.
- Jumlah data adalah 6.
- Karena jumlah data genap, ambil dua nilai tengah yaitu 5 dan 6.
- Gunakan rumus Me = (5 + 6)/2.
- Hasilnya adalah 5,5.

Jika siswa sudah menjawab 5,5, jangan meminta siswa mengulang perhitungan. Berikan apresiasi, tunjukkan rumus, jelaskan perhitungannya, lalu simpulkan.

PENTING:
- Jangan mengarang hasil perhitungan.
- Periksa kembali ketepatan setiap operasi matematika.
- Jangan menyatakan jawaban benar jika hasilnya salah.
- Jangan berpindah ke materi lain tanpa menyelesaikan pembahasan sebelumnya.
- Akhiri dengan satu pertanyaan singkat yang relevan untuk mengetahui pemahaman siswa.
        `
    }]
},

                contents: riwayatPercakapan,

                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 1024
                }

            })
        });

        // Periksa respons API
        const data = await respons.json();

if (!data.sukses) {
    throw new Error(
        data.pesan || "AI Tutor gagal memberikan jawaban."
    );
}

const jawaban = data.jawaban;

if (!jawaban) {
    throw new Error("AI belum memberikan jawaban. Silakan coba kembali.");
}
        isiTutor.textContent = jawaban;
riwayatPercakapan.push({
    role: "model",
    parts: [{
        text: jawaban
    }]
});
    } catch (error) {

    console.error("Kesalahan AI Tutor:", error);

    // Hapus pertanyaan yang gagal dari riwayat
    if (
        riwayatPercakapan.length > 0 &&
        riwayatPercakapan[riwayatPercakapan.length - 1].role === "user"
    ) {
        riwayatPercakapan.pop();
    }

    isiTutor.textContent =
    "Kesalahan AI Tutor: " + error.message; +
        "Silakan coba kirim pertanyaan kembali beberapa saat lagi.";

}
    percakapan.scrollTop = percakapan.scrollHeight;
}


// ==========================================
// TOMBOL CONTOH PERTANYAAN AI TUTOR
// ==========================================

function tanyaContohTutor(pertanyaan) {

    const input = document.getElementById("pertanyaanTutor");

    input.value = pertanyaan;

    kirimPertanyaanTutor();

}

 // ==========================================
 // FUNGSI PERIKSA PEMAHAMAN MATERI MEDIAN
 // ==========================================

function periksaPemahamanMedian() {

    const input = document.getElementById("jawabanCekMedian");
    const hasil = document.getElementById("hasilCekMedian");

    const jawaban = input.value.trim();

    if (jawaban === "") {

        hasil.textContent = "Silakan masukkan jawaban terlebih dahulu.";

    } else if (Number(jawaban) === 6) {

        hasil.innerHTML = `
            <strong>🎉 Hebat! Jawabanmu benar!</strong>
            <p>
                Data setelah diurutkan adalah:
                4, 5, 6, 7, 9.
            </p>
            <p>
                Banyak data = 5.
                Posisi median = (5 + 1) / 2 = 3.
            </p>
            <p>
                Data ke-3 adalah 6. Jadi, median yang benar adalah 6.
            </p>
        `;

    } else {

        hasil.innerHTML = `
            <strong>🌷 Belum tepat, tetap semangat!</strong>
            <p>
                Coba urutkan data dari yang terkecil:
                4, 5, 6, 7, 9.
            </p>
            <p>
                Setelah itu, tentukan nilai yang berada tepat di tengah.
                Coba periksa kembali jawabanmu, ya!
            </p>
        `;

    }

}

// ==========================================
// FUNGSI PERIKSA PEMAHAMAN MEDIAN DATA GENAP
// ==========================================

function periksaPemahamanMedianGenap() {

    const input = document.getElementById("jawabanCekMedianGenap");
    const hasil = document.getElementById("hasilCekMedianGenap");

    const jawaban = input.value.trim();

    if (jawaban === "") {

        hasil.textContent = "Silakan masukkan jawaban terlebih dahulu.";

    } else if (Number(jawaban) === 3.5) {

        hasil.innerHTML = `
            <strong>🎉 Hebat! Jawabanmu benar!</strong>
            <p>
                Data setelah diurutkan adalah:
                2, 3, 4, 5.
            </p>
            <p>
                Dua nilai tengah adalah 3 dan 4.
            </p>
            <p>
                Median = (3 + 4) / 2 = 3,5.
            </p>
            <p>
                Jadi, median data tersebut adalah 3,5 jam.
            </p>
        `;

    } else {

        hasil.innerHTML = `
            <strong>🌷 Belum tepat, tetap semangat!</strong>
            <p>
                Coba urutkan data terlebih dahulu:
                2, 3, 4, 5.
            </p>
            <p>
                Ingat, data genap memiliki dua nilai tengah.
                Hitung rata-rata kedua nilai tersebut, ya!
            </p>
        `;

    }

}

document.addEventListener("DOMContentLoaded", function () {

    tampilkanHalaman("beranda");

});
// ==========================================
// FUNGSI SIMPAN REFLEKSI PEMBELAJARAN
// ==========================================

function simpanRefleksi() {

    const refleksi = {
        belajar: document.getElementById("refleksiBelajar").value.trim(),
        kesulitan: document.getElementById("refleksiKesulitan").value.trim()
    };

    const pesan = document.getElementById("pesanRefleksi");

    if (refleksi.belajar === "" || refleksi.kesulitan === "") {

        pesan.textContent =
            "Silakan isi kedua pertanyaan refleksi terlebih dahulu. 🌷";

        return;
    }

    try {

        localStorage.setItem(
            "refleksiMedian",
            JSON.stringify(refleksi)
        );

        pesan.textContent =
            "🎉 Refleksi pembelajaran berhasil disimpan!";

    } catch (error) {

        pesan.textContent =
            "Maaf, refleksi belum dapat disimpan.";

    }

}
// ==========================================
// FUNGSI MEMUAT REFLEKSI PEMBELAJARAN
// ==========================================

function muatRefleksi() {

    const dataTersimpan = localStorage.getItem("refleksiMedian");

    if (!dataTersimpan) {
        return;
    }

    try {

        const refleksi = JSON.parse(dataTersimpan);

        const belajar = document.getElementById("refleksiBelajar");
        const kesulitan = document.getElementById("refleksiKesulitan");
        const pesan = document.getElementById("pesanRefleksi");

        if (belajar) {
            belajar.value = refleksi.belajar || "";
        }

        if (kesulitan) {
            kesulitan.value = refleksi.kesulitan || "";
        }

        if (pesan) {
            pesan.textContent =
                "💾 Refleksi sebelumnya berhasil dimuat kembali!";
        }

    } catch (error) {

        console.error("Gagal memuat refleksi:", error);

    }

}